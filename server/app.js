import express  from "express";
import {config} from "dotenv";
import cors  from "cors";
import { router } from "./routes/index.routes.js";
import cookieParser from "cookie-parser";

config();
const app=express();
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
app.use(express.json());
app.use(router)
app.use(cookieParser());

const port=process.env.PORT || 3001;
app.listen(port,()=>{
   
    console.log(`el servidor esta corriendo en la ruta http://localhost:${port}/`)
})