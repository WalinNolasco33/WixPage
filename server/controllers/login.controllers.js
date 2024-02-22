import { pool } from "../db.js";
import bcrypt from "bcrypt";
import { GenerateToken } from "../helpers/handlerToken.js";
import { findOutToken } from "../helpers/handlerToken.js";

const Post = async (req, res) => {
  try {
    const { name, user, password } = req.body;
    const [check] = await pool.query("SELECT  user FROM users WHERE user= ?", [
      user,
    ]);
    console.log(check);
    if (check.length == 0) {
      try {
        const pass = await bcrypt.hash(password, 8);
        const [result] = await pool.query(
          "INSERT INTO users(name, user, pass) VALUES (?, ?, ?)",
          [name, user, pass]
        );
        const [resultSelect] = await pool.query(
          "select id,name,user from users where user= ?",
          [user]
        );

        const userData = {
          // user: resultSelect[0],
          token: GenerateToken(resultSelect[0]),
        };

        res.cookie("token", JSON.stringify(userData), {
          maxAge: 24 * 60 * 60 * 1000,
        });
        res.status(201).json({ message: "Usuario creado con éxito", userData });
      } catch (error) {
        console.error("Error al hashear la contraseña:", error);
        res
          .status(500)
          .json({ error: "Error al insertar en la base de datos" });
      }
    } else {
      res.status(400).json({ message: "Usuario ya existente, intente de nuevo" });
    }
  } catch (error) {
    return res.status(500).json({ message: "error.message" });
  }
};

const Postsession = async (req, res) => {
  try {
    const { user, password } = req.body;

    const pass = await bcrypt.hash(password, 8);
    const [result] = await pool.query(
      "select id, name, user, pass  from users where user=?",
      [user]
    );
   
    if (
      !result ||
      result.length === 0 ||
      !(await bcrypt.compare(password, result[0].pass))
    ) {
      res.status(500).json({ value: false, message: "Usuario no autenticado" });
    } else {
    

      const userData = {
        // user: resultSelect[0],
        token: GenerateToken(result[0]),
      };

      res.cookie("token", JSON.stringify(userData), {
        maxAge: 24 * 60 * 60 * 1000,
      });
      res.status(201).json({ value: true, message: "Usuario autenticado" });
      
    }
  } catch (error) {
    console.error("Error al hashear la contraseña:", error);
    res.status(500).json({ error: "Error al insertar en la base de datos" });
  }
};

// const Get = async (req, res) => {
//   try {

//     const [result] = await pool.query("SELECT name FROM users WHERE id = ?", [
//         req.params.id
//     ]);
//     res.json(result[0]);
//     console.log(result[0]);
//   } catch (error) {
//     res.status(500).json({ error: "Error al consultar la base de datos" });
//   }
// };

const Delete = async (req, res) => {
  try {
    const { name, password } = req.body;
    const [result] = await pool.query(
      "DELETE FROM users WHERE name = ? AND pass = ?",
      [name, password]
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar de la base de datos" });
  }
};

const Gets = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM users");
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Error al consultar la base de datos" });
  }
};
const verify = async (req, res) => {
  const indexCookie = req.rawHeaders;
  const index = indexCookie.indexOf("Cookie");
  
  if (typeof index === undefined) return res.status(401).json({ message: "Unauthorized" });

  const userFound = await findOutToken(indexCookie[index + 1]);
   console.log(userFound)
  if (!userFound.id) return res.status(401).json({ message: "Unauthorized" });
  return res.json({
    id: userFound.id,
  });
};
export { Post, Delete, Gets, Postsession, verify };
