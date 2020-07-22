import express from "express";
import { BandAlbumController } from "../controller/bandAddAlbum/addAlbumController";

export const bandRouter = express.Router();

bandRouter.post("/addAlbum/", new BandAlbumController().add);
