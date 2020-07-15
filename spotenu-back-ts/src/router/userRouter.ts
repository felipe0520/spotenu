import express from "express";

import { SingUpController } from "../controller/singUp/singUpController";
import { LoginController } from "../controller/login/loginController";
import { AdminSeeAllController } from "../controller/adminSeeAll/seeAllBandsController";

export const userRouter = express.Router();

userRouter.post("/signup", new SingUpController().signUp);

userRouter.post("/login/", new LoginController().login);

userRouter.get("/allbands/", new AdminSeeAllController().viewBand);
