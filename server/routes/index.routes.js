import  {Router}  from "express";
import { Post,Delete,Gets,Postsession, verify } from "../controllers/login.controllers.js";
import { handlerAuth } from "../helpers/handlerAuth.js";
import {handlerRol} from "../helpers/handlerRol.js"
import { SendEmail } from "../controllers/email.controller.js";

const router =Router();
router.post("/log",Post);
router.get("/users/",handlerAuth,handlerRol, Gets);
router.delete("/delete",Delete);
router.post("/session",Postsession);
router.post("/email",SendEmail);
router.get("/auth/verify", verify)
export {router}