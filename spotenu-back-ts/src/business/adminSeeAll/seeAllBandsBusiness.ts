import { UserDataBase } from "../../database/UserDataBase";
import { TokenGenerator } from "../../services/TokenGenerator";
import { UserRole } from "../../model/User";

export class AdminSeeAllBusiness {
  constructor(
    private userDataBase: UserDataBase,
    private tokenGenerator: TokenGenerator
  ) {}

  public async bands(token: string | undefined) {
    if (!token) {
      throw new Error("Nonexistent token ");
    }
    const data = this.tokenGenerator.verify(token);

    if (data.role !== UserRole.ADMIN) {
      throw new Error("Invalid token");
    }

    const result = await this.userDataBase.getBands();

    return { data: result };
  }
}
