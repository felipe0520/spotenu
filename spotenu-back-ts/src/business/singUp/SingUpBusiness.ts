import { TypeUser } from "./typeSingUp";
import { HashGenerator } from "../../services/HashGenerator";
import { UserDataBase } from "../../database/UserDataBase";
import { TokenGenerator } from "../../services/TokenGenerator";
import { IdGenerator } from "../../services/IdGenerator";
import { User, stringToUserRole, UserRole } from "../../model/User";
import {
  validatorSingUp,
  validatorPassword,
  validatorDescriptionBand,
} from "../../validator/SingUp";

export class SingUpBusiness {
  constructor(
    private userDataBase: UserDataBase,
    private hashGeneration: HashGenerator,
    private tokenGenerator: TokenGenerator,
    private idGenerator: IdGenerator
  ) {}

  public async signup(dataUser: TypeUser) {
    const id = this.idGenerator.generate();

    const role = stringToUserRole(dataUser.role);

    const description =
      role === UserRole.BANDA ? dataUser.description : undefined;
    const hash = await this.hashGeneration.generate(dataUser.password);

    const user = new User(
      dataUser.name,
      dataUser.nickname,
      dataUser.email,
      hash,
      id,
      role,
      role === UserRole.BANDA ? 0 : 1,
      description
    );

    if (role === UserRole.ADMIN) {
      if (!dataUser.authorization) {
        throw new Error("token is empty");
      }
      const token = this.tokenGenerator.verify(dataUser.authorization);
      if (token.role !== UserRole.ADMIN) {
        throw new Error("only for administrators");
      }
      validatorPassword(dataUser.password, 10);
      validatorSingUp(user);
    }

    if (role === UserRole.USER) {
      validatorPassword(dataUser.password, 6);
      validatorSingUp(user);
    }
    if (role === UserRole.BANDA) {
      validatorPassword(dataUser.password, 6);
      validatorSingUp(user);
      validatorDescriptionBand(dataUser.description);
    }
    await this.userDataBase.singup(user);

    let token;

    if (user.getAproved() === 1) {
      token = this.tokenGenerator.generation({
        id: user.getId(),
        role: user.getRole(),
      });
    } else {
      token = "waiting for approval";
    }

    return token;
  }
}
