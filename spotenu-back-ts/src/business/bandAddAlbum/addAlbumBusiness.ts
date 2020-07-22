import { TokenGenerator } from "../../services/TokenGenerator";
import { UserRole } from "../../model/User";
import { IdGenerator } from "../../services/IdGenerator";
import { Genre } from "../../model/Genre";
import { AlbumDataBase } from "../../database/AlbumDataBase";
import { typeAddAlbum } from "./typeAddAlbum";
import { Album } from "../../model/Album";

export class BandAlbumBusiness {
  constructor(
    private albumDataBase: AlbumDataBase,
    private IdGenerator: IdGenerator,
    private tokenGenerator: TokenGenerator
  ) {}

  public async add(token: string | undefined, input: typeAddAlbum) {
    if (!token) {
      throw new Error("Nonexistent token ");
    }
    const data = this.tokenGenerator.verify(token);

    if (data.role !== UserRole.BANDA) {
      throw new Error("Invalid token");
    }

    const id = this.IdGenerator.generate();

    const result = await this.albumDataBase.add(
      new Album(input.name, id, data.id, input.genreId)
    );

    return result;
  }
}
