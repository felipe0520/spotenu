import { UserDataBase } from "../../database/UserDataBase";
import { TokenGenerator } from "../../services/TokenGenerator";
import { UserRole } from "../../model/User";
import validator from "validator";

export class AdminApprovedBusiness {
  constructor(
    private userDataBase: UserDataBase,
    private tokenGenerator: TokenGenerator
  ) {}

  public async band(token: string | undefined, id: string) {
    if (!token) {
      throw new Error("Nonexistent token ");
    }
    const data = this.tokenGenerator.verify(token);

    if (!validator.isUUID(id)) {
      throw new Error("Invalid id");
    }

    if (data.role !== UserRole.ADMIN) {
      throw new Error("Invalid token");
    }

    const result = await this.userDataBase.approvedBand(id);

    return result;
  }
}
