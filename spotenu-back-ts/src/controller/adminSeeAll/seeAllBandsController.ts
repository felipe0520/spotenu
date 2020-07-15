import { Request, Response } from "express";
import { UserDataBase } from "../../database/UserDataBase";
import { TokenGenerator } from "../../services/TokenGenerator";
import { AdminSeeAllBusiness } from "../../business/adminSeeAll/seeAllBandsBusiness";

export class AdminSeeAllController {
  private static adminSeeAllBusiness = new AdminSeeAllBusiness(
    new UserDataBase(),
    new TokenGenerator()
  );
  public async viewBand(req: Request, res: Response) {
    const token = req.headers.authorization;
    try {
      const result = await AdminSeeAllController.adminSeeAllBusiness.bands(
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
