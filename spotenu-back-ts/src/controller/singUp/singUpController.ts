import { Request, Response } from "express";
import { SingUpBusiness } from "../../business/singUp/SingUpBusiness";
import { HashGenerator } from "../../services/HashGenerator";
import { UserDataBase } from "../../database/UserDataBase";
import { TokenGenerator } from "../../services/TokenGenerator";
import { IdGenerator } from "../../services/IdGenerator";

export class SingUpController {
  private static singUpBusiness = new SingUpBusiness(
    new UserDataBase(),
    new HashGenerator(),
    new TokenGenerator(),
    new IdGenerator()
  );
  public async signUp(req: Request, res: Response) {
    const user = {
      name: req.body.name,
      nickname: req.body.nickname,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
      description: req.body.description,
      authorization: req.headers.authorization,
    };

    try {
      const result = await SingUpController.singUpBusiness.signup({
        name: user.name,
        nickname: user.nickname,
        email: user.email,
        password: user.password,
        role: user.role,
        description: user.description,
        authorization: user.authorization,
      });
      res.status(200).send({ token: result });
      new UserDataBase().destroyConnection();
    } catch (error) {
      {
        res.status(400).send({ message: error.message });
      }
      new UserDataBase().destroyConnection();
    }
  }
}
