import { Request, Response } from "express";
import { UserDataBase } from "../../database/UserDataBase";
import { TokenGenerator } from "../../services/TokenGenerator";
import { IdGenerator } from "../../services/IdGenerator";
import { BandMusicBusiness } from "../../business/bandAddMusic/addMusicBusiness";
import { MusicDataBase } from "../../database/MusicDataBase";

export class BandMusicController {
  private static bandMusicBusiness = new BandMusicBusiness(
    new MusicDataBase(),
    new IdGenerator(),
    new TokenGenerator()
  );
  public async add(req: Request, res: Response) {
    const token = req.headers.authorization;
    const name = req.body.name;
    const albumId = req.body.AlbumId;

    try {
      const result = await BandMusicController.bandMusicBusiness.add(
        token as string,
        {
          name,
          albumId,
        }
      );
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
