import { BaseDataBase } from "./BaseDataBase";
import { Album } from "../model/Album";

export class AlbumDataBase extends BaseDataBase {
  protected static TABLE_NAME = "Album";
  protected static TABLE_NAME_Album_And_Genre = "AlbumAndGenre";

  private toModel(dbModel?: any): Album | undefined {
    return (
      dbModel &&
      new Album(dbModel.name, dbModel.id, dbModel.id_band, dbModel.genre)
    );
  }

  public async add(user: Album) {
    await this.getConnection().raw(`
    INSERT INTO ${AlbumDataBase.TABLE_NAME} (id, album_name, id_band)
    VALUES(
        "${user.getId()}",
        "${user.getName()}",
        "${user.getIdBand()}"
    )
    `);
    const length = user.getGenreAlbumId().length;

    for (let i = 0; i < length; i++) {
      await this.addJunctionAlbumAndGenre({
        idAlbum: user.getId(),
        idGenre: user.getGenreAlbumId()[i],
      });
    }

    return "album add successfully";
  }

  public async addJunctionAlbumAndGenre(user: {
    idAlbum?: string;
    idGenre: any;
  }) {
    await this.getConnection().raw(`
    INSERT INTO ${AlbumDataBase.TABLE_NAME_Album_And_Genre} (id_album, id_genre)
    VALUES(
        "${user.idAlbum}",
        "${user.idGenre}"
    )
    `);
  }
}
