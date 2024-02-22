import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();
export const GenerateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      role: user.rol,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );
};

export const findOutToken = async (token) => {
  try {
    const tokenDecode = JSON.parse(decodeURIComponent(token).substring(6));
    console.log(tokenDecode)
    return jwt.verify(tokenDecode.token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};

const decodesing = (token) => {};
