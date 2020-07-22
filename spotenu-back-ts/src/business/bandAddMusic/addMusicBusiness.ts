import { TokenGenerator } from "../../services/TokenGenerator";
import { UserRole } from "../../model/User";
import { IdGenerator } from "../../services/IdGenerator";

import { MusicDataBase } from "../../database/MusicDataBase";
import { typeAddMusic } from "./typeAddMusic";
import { Music } from "../../model/Music";

export class BandMusicBusiness {
  constructor(
    private musicDataBase: MusicDataBase,
    private IdGenerator: IdGenerator,
    private tokenGenerator: TokenGenerator
  ) {}

  public async add(token: string, DataMusic: typeAddMusic) {
    if (!token) {
      throw new Error("Nonexistent token ");
    }
    const data = this.tokenGenerator.verify(token);

    if (data.role !== UserRole.BANDA) {
      throw new Error("Invalid token");
    }

    const id = this.IdGenerator.generate();

    const result = await this.musicDataBase.add(
      new Music(DataMusic.name, id, DataMusic.albumId)
    );

    return result;
  }
}
