import { findOutToken } from "./handlerToken.js";

export const handlerAuth = async (req, res, next) => {
  try {
    const token= req.headers.authorization.split(' ').pop();
    console.log(token)
    const tokenData=await findOutToken(token);
    console.log(tokenData);
    if(tokenData.id){
      next();
    }else{
      res.status(409).send({error:"No tienes los permisos"});
    }
  } catch (error) {
    console.error(error);  
    res.status(409).send({error:"No tienes los permisos"});

  }
};
