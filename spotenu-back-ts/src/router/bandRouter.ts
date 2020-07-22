import express from "express";
import { BandAlbumController } from "../controller/bandAddAlbum/addAlbumController";
import { BandMusicController } from "../controller/bandAddMusic/addMusicController";

export const bandRouter = express.Router();

bandRouter.post("/addAlbum/", new BandAlbumController().add);

bandRouter.post("/addMusic/", new BandMusicController().add);
