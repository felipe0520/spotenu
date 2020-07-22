import { Request, Response } from "express";
import { UserDataBase } from "../../database/UserDataBase";
import { TokenGenerator } from "../../services/TokenGenerator";
import { AdminApprovedBusiness } from "../../business/adminApprovedBand/approvedBandBusiness";

export class AdminApprovedController {
  private static adminApprovedBusiness = new AdminApprovedBusiness(
    new UserDataBase(),
    new TokenGenerator()
  );
  public async band(req: Request, res: Response) {
    const token = req.headers.authorization;
    const id = req.query.id;

    try {
      const result = await AdminApprovedController.adminApprovedBusiness.band(
        token,
        id as string
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
