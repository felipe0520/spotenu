import { TokenGenerator } from "../../services/TokenGenerator";
import { UserRole } from "../../model/User";
import { IdGenerator } from "../../services/IdGenerator";
import { Genre } from "../../model/Genre";
import { GenreDataBase } from "../../database/GenreDataBase";

export class AdminGenreBusiness {
  constructor(
    private genreDataBase: GenreDataBase,
    private IdGenerator: IdGenerator,
    private tokenGenerator: TokenGenerator
  ) {}

  public async add(token: string | undefined, name: string) {
    if (!token) {
      throw new Error("Nonexistent token ");
    }
    const data = this.tokenGenerator.verify(token);

    if (data.role !== UserRole.ADMIN) {
      throw new Error("Invalid token");
    }

    const id = this.IdGenerator.generate();

    const result = await this.genreDataBase.add(new Genre(name, id));

    return result;
  }
}
