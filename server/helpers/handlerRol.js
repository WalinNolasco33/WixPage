import { pool } from "../db.js";

export const handlerRol = async (req, res, next) => {
  const { user } = req.body;
  const [result] = await pool.query("select rol from users where user= ?", [
    user,
  ]);
  
  if (result && result[0] && result[0].hasOwnProperty('rol')) {
    result[0].rol === "user"
      ? res.status(403).json({ message: "Su usuario no tiene estos permisos" })
      : next();
  } else {
    res.status(404).json({ message: "Su usuario no existe" });
  }
};
