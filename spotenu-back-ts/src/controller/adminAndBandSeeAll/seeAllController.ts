import { Request, Response } from "express";
import { UserDataBase } from "../../database/UserDataBase";
import { TokenGenerator } from "../../services/TokenGenerator";
import { AdminAndBandSeeAllBusiness } from "../../business/adminAndBandSeeAll/seeAllBusiness";
import { GenreDataBase } from "../../database/GenreDataBase";

export class AdminAndBandSeeAllController {
  private static adminAndBandSeeAllBusiness = new AdminAndBandSeeAllBusiness(
    new TokenGenerator(),
    new GenreDataBase()
  );
  public async genre(req: Request, res: Response) {
    const token = req.headers.authorization;

    try {
      const result = await AdminAndBandSeeAllController.adminAndBandSeeAllBusiness.genres(
        token
      );
      res.status(200).send(result);
      new UserDataBase().distroyConnection();
    } catch (error) {
      {
        res.status(400).send({ message: error.message });
        new UserDataBase().distroyConnection();
      }
    }
  }
}
