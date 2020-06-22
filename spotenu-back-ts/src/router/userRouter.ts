import express from "express";

import { SingUpController } from "../controller/singUp/singUpController";
import { LoginController } from "../controller/login/loginController";

export const userRouter = express.Router();

userRouter.post("/signup", new SingUpController().signUp);

userRouter.get("/login/", new LoginController().login);
