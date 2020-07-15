import { HashGenerator } from "../../services/HashGenerator";
import { UserDataBase } from "../../database/UserDataBase";
import { TokenGenerator } from "../../services/TokenGenerator";
import { validatorLogin } from "../../validator/Login";
import { TypeUserLogin } from "./typeLogin";

export class LoginBusiness {
  constructor(
    private userDataBase: UserDataBase,
    private hashGeneration: HashGenerator,
    private tokenGenerator: TokenGenerator
  ) {}

  public async login(userData: TypeUserLogin) {
    validatorLogin(userData);

    const user = await this.userDataBase.getUserByEmailOrNickname(
      userData.nameOrNickname
    );

    if (!user) {
      throw new Error("name or password invalid");
    }

    if (
      !(await this.hashGeneration.compareHash(
        userData.password,
        user.getPassword()
      ))
    ) {
      throw new Error("name or password invalid");
    }

    if (user.getAproved() === 0) {
      throw new Error("you not approved");
    }

    const token = this.tokenGenerator.generation({
      id: user.getId(),
      role: user.getRole(),
    });

    return { token };
  }
}
