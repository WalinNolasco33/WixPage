import { useContext, useState, useEffect } from "react";
import { WixContext } from "./WixContext";
import {
  Log,
  Session,
  Delete,
  Email,
  GetUsers,
  verityTokenRequet,
} from "../api/api.js";
import Cookies from "js-cookie";
export const useWix = () => {
  const context = useContext(WixContext);
  if (!context) {
    throw new Error("useWix must be used within a WixContextProvider");
  }
  return context;
};

export const WixContextProvider = ({ children }) => {
  const [signup, isAuthenticated] = useState(null);
  const [cookie, setCookie] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    
      async function checkLogin() {
        const cookies = Cookies.get();
  
        if (cookies.token) {
          try {
            const res = await verityTokenRequet(cookies.token);
            console.log(res.data);
            if (res.data) {
              
              
              setCookie(res.data);
              setLoading(false);
              isAuthenticated(true);
              console.log(signup, loading)
              return;
            }
            
            isAuthenticated(false);
            setCookie(null);
            setLoading(false);
          } catch (error) {
           
            setCookie(null);
            isAuthenticated(false);
            setLoading(false);
          }
      
        } else {
         
          isAuthenticated(false);
          setCookie(null);
          setLoading(false);
        }
      }
      checkLogin();
    }, [signup]);

  const Logwix = async (login) => {
    try {
      return await Log(login);
    } catch (error) {
      console.log(error);
    }
  };

  const Sessionwix = async (session) => {
    try {
      return await Session(session);
    } catch (error) {
      console.log(error);
    }
  };
  const Deletewix = async (eliminate) => {
    try {
      return await Delete(eliminate);
    } catch (error) {
      console.log(error);
    }
  };
  const Emailwix = async (email) => {
    try {
    
      return await Email(email);
    } catch (error) {
      console.log(error);
    }
  };
  const GetUserswix = async (getuser) => {
    try {
      return await GetUsers(getuser);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <WixContext.Provider
      value={{
        Logwix,
        Sessionwix,
        Deletewix,
        GetUserswix,
        Emailwix,
        isAuthenticated,
        setCookie,
        setLoading,
        cookie,
        signup,
        loading,
      }}
    >
      {children}
    </WixContext.Provider>
  );
};
