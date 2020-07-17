import { TokenGenerator } from "../../services/TokenGenerator";
import { UserRole } from "../../model/User";
import { GenreDataBase } from "../../database/GenreDataBase";

export class AdminAndBandSeeAllBusiness {
  constructor(
    private tokenGenerator: TokenGenerator,
    private genreDataBase: GenreDataBase
  ) {}

  public async genres(token: string | undefined) {
    if (!token) {
      throw new Error("Nonexistent token ");
    }
    const data = this.tokenGenerator.verify(token);
    console.log(data.role, "admin:", data.role == UserRole.ADMIN);

    if (data.role !== UserRole.ADMIN && data.role !== UserRole.BANDA) {
      throw new Error("Invalid token");
    }

    const result = await this.genreDataBase.getGenres();

    return {
      data: result,
    };
  }
}
