import { TokenGenerator } from "../../services/TokenGenerator";
import { MusicDataBase } from "../../database/MusicDataBase";

export class AllUsersMusicsBusiness {
  constructor(
    private musicDataBase: MusicDataBase,
    private tokenGenerator: TokenGenerator
  ) {}

  public async get(token: string | undefined) {
    if (!token) {
      throw new Error("Nonexistent token ");
    }

    this.tokenGenerator.verify(token);

    const result = await this.musicDataBase.getMusics();

    return {
      data: result,
    };
  }
}
