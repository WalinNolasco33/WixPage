import NotFound from "./pages/NotFound.jsx";
import {Sales} from "./pages/Sales.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import Start from "./pages/Start.jsx";
import Login from "./pages/Login.jsx";
import Navbar from "./components/NaveBar.jsx";
import "./app.css";
import { WixContextProvider } from "./context/WixProvider.jsx";
import {
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsFillChatTextFill,
} from "react-icons/bs";

import ProtectedRoute from "./ProtectedRoute.jsx";


function App() {
  



  
 
 
 
  return (
    <div className="font-principal w-full overflow-hidden">
      {useLocation().pathname != "/login" ?<Navbar/>:<></>

      }

      <div>
        <div className="flex justify-end ml-2 ">
          {useLocation().pathname != "/login" ? (
            <div className="grid gap-2 fixed z-30 p-6  bg-black/50  my-44">
              <BsTwitter className="text-4xl text-white my-1" />
              <BsFacebook className="text-4xl text-white my-1" />
              <BsInstagram className="text-4xl text-white my-1" />:<></>
            </div>
          ) : (
            <></>
          )}
          {useLocation().pathname != "/login" ? (
            <div className=" fixed  z-30 top-[85%] bg-white rounded-lg mr-4 p-4">
              <BsFillChatTextFill className="text-3xl" />
            </div>
          ) : (
            <></>
          )}
        </div>
        <WixContextProvider>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
            
            <Route element={<ProtectedRoute/>}>
            <Route path="/Sales" element={<Sales/>} />
            </Route>
          </Routes>
        </WixContextProvider>
      </div>
    </div>
  );
}

export default App;
