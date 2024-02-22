import axios from "./axios";

const Log = async (newUser) => {
  try {
    return await axios.post(`log`, newUser);
  } catch (error) {
    return error;
  }
};

const Session = async (sessionUser) => {
  try {
    return  await axios.post(`session`, sessionUser);
  } catch (error) {
    return error;
  }
};

const Delete = async (deleteUser) => {
  try {
    return await axios.delete(`delete`, deleteUser);
  } catch (error) {
    return error;
  }
};

const Email = async (email) => {
  try {
   
    return  await axios.post(`email`, email);

  } catch (error) {
    return error;
  }
};

const GetUsers = async (getUsers) => {
  try {
    return  await axios.get(`users/`, getUsers);
  } catch (error) {
    return error;
  }
};


const verityTokenRequet= async(token)=>await axios.get('auth/verify', token);


export { Log, Session, Delete, Email, GetUsers, verityTokenRequet };
