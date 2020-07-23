import express from "express";

import { SingUpController } from "../controller/singUp/singUpController";
import { LoginController } from "../controller/login/loginController";
import { AllUsersMusicsController } from "../controller/allUsers/AllUsersMusicsController";

export const userRouter = express.Router();

userRouter.post("/signup", new SingUpController().signUp);

userRouter.post("/login/", new LoginController().login);

userRouter.get("/allMusics/", new AllUsersMusicsController().get);
