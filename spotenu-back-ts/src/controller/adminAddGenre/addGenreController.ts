import { TokenGenerator } from "../../services/TokenGenerator";
import { IdGenerator } from "../../services/IdGenerator";
import { GenreDataBase } from "../../database/GenreDataBase";
import { AdminGenreBusiness } from "../../business/adminAddGenre/addGenreBusiness";
import { Request, Response } from "express";
import { UserDataBase } from "../../database/UserDataBase";

export class AdminGenreController {
  private static adminGenreBusiness = new AdminGenreBusiness(
    new GenreDataBase(),
    new IdGenerator(),
    new TokenGenerator()
  );

  public async add(req: Request, res: Response) {
    const name = req.body.name;
    const token = req.headers.authorization;
    try {
      const response = await AdminGenreController.adminGenreBusiness.add(
        token,
        name
      );

      res.status(200).send(response);
      new UserDataBase().destroyConnection();
    } catch (error) {
      {
        res.status(400).send({ message: error.message });
        new UserDataBase().destroyConnection();
      }
    }
  }
}
