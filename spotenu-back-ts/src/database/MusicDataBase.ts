import { BaseDataBase } from "./BaseDataBase";
import { Music } from "../model/Music";

export class MusicDataBase extends BaseDataBase {
  protected static TABLE_NAME = "Music";

  public async add(dataMusic: Music) {
    await this.getConnection().raw(`
    INSERT INTO ${MusicDataBase.TABLE_NAME} (id, name, id_album)
    VALUES(
        "${dataMusic.getId()}",
        "${dataMusic.getName()}",
        "${dataMusic.getIdAlbum()}"
    )
    `);

    return "music add successfully";
  }

  public async getMusics() {
    const response = await this.getConnection().raw(
      `
      SELECT  name, album_name from Music m
      join Album a
      on m.id_album = a.id;
      `
    );
    console.log(response[0]);
    return response[0];
  }
}
