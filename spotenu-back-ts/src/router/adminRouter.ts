import express from "express";

import { AdminSeeAllController } from "../controller/adminSeeAll/seeAllBandsController";
import { AdminApprovedController } from "../controller/adminApprovedBand/approvedBandController";

export const adminRouter = express.Router();

adminRouter.get("/allbands/", new AdminSeeAllController().viewBand);

adminRouter.post("/approvedband/", new AdminApprovedController().band);
