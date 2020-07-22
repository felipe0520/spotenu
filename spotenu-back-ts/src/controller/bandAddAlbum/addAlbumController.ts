import { Request, Response } from "express";
import { UserDataBase } from "../../database/UserDataBase";
import { TokenGenerator } from "../../services/TokenGenerator";
import { BandAlbumBusiness } from "../../business/bandAddAlbum/addAlbumBusiness";
import { AlbumDataBase } from "../../database/AlbumDataBase";
import { IdGenerator } from "../../services/IdGenerator";

export class BandAlbumController {
  private static bandAlbumBusiness = new BandAlbumBusiness(
    new AlbumDataBase(),
    new IdGenerator(),
    new TokenGenerator()
  );
  public async add(req: Request, res: Response) {
    const token = req.headers.authorization;
    const name = req.body.name;
    const genreId = req.body.genreId;

    try {
      const result = await BandAlbumController.bandAlbumBusiness.add(token, {
        name,
        genreId,
      });
      res.status(200).send(result);
      new UserDataBase().destroyConnection();
    } catch (error) {
      {
        res.status(400).send({ message: error.message });
        new UserDataBase().destroyConnection();
      }
    }
  }
}
