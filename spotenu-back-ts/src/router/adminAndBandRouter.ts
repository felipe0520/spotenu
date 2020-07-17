import express from "express";
import { AdminAndBandSeeAllController } from "../controller/adminAndBandSeeAll/seeAllController";

export const adminAndBandRouter = express.Router();

adminAndBandRouter.get("/allgenres/", new AdminAndBandSeeAllController().genre);
