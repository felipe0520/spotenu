import { Request, Response } from "express";
import { UserDataBase } from "../../database/UserDataBase";
import { TokenGenerator } from "../../services/TokenGenerator";
import { AllUsersMusicsBusiness } from "../../business/allUsers/AllUsersMusicsBusiness";
import { MusicDataBase } from "../../database/MusicDataBase";

export class AllUsersMusicsController {
  private static allUsersMusicsBusiness = new AllUsersMusicsBusiness(
    new MusicDataBase(),
    new TokenGenerator()
  );
  public async get(req: Request, res: Response) {
    const token = req.headers.authorization;

    try {
      const result = await AllUsersMusicsController.allUsersMusicsBusiness.get(
        token
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
