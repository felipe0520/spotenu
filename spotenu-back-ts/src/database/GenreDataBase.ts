import { BaseDataBase } from "./BaseDataBase";
import { Genre } from "../model/Genre";

export class GenreDataBase extends BaseDataBase {
  protected static TABLE_NAME = "Genre";

  private toModel(dbModel?: any): Genre | undefined {
    return dbModel && new Genre(dbModel.name, dbModel.id);
  }

  public async add(user: Genre) {
    await this.getConnection().raw(`
    INSERT INTO ${GenreDataBase.TABLE_NAME} (id, name)
    VALUES(
        "${user.getId()}",
        "${user.getName()}"
    )
    `);
    return "genre successfully added";
  }

  public async getBands(): Promise<Genre | undefined> {
    const result = await this.getConnection().raw(`
      SELECT * from '${GenreDataBase.TABLE_NAME}'
      `);
    return this.toModel(result[0][0]);
  }
}
