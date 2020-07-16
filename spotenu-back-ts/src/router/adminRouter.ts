import express from "express";

import { AdminSeeAllController } from "../controller/adminSeeAll/seeAllBandsController";
import { AdminApprovedController } from "../controller/adminApprovedBand/approvedBandController";
import { AdminGenreController } from "../controller/adminAddGenre/addGenreController";

export const adminRouter = express.Router();

adminRouter.get("/allbands/", new AdminSeeAllController().viewBand);

adminRouter.post("/approvedband/", new AdminApprovedController().band);

adminRouter.post("/addgenre/", new AdminGenreController().add);
