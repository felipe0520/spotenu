// import { BaseDataBase } from "./BaseDataBase";
// import { Album } from "../model/Album";

// export class AlbumDataBase extends BaseDataBase {
//   protected static TABLE_NAME = "Album";
//   protected static TABLE_NAME_Album_And_Genre = "AlbumAndGenre";

//   private toModel(dbModel?: any): Album | undefined {
//     return dbModel && new Album(dbModel.name, dbModel.id, dbModel.id_band);
//   }

//   public async add(user: Album) {
//     await this.getConnection().raw(`
//     INSERT INTO ${AlbumDataBase.TABLE_NAME} (id, name, id_band)
//     VALUES(
//         "${user.getId()}",
//         "${user.getName()}",
//         "${user.getIdBand()}
//     )
//     `);
//     await this.addJunctionAlbumAndGenre(user);

//     return "sucesso";
//   }

//   public async addJunctionAlbumAndGenre(user: Album) {
//     await this.getConnection().raw(`
//     INSERT INTO ${AlbumDataBase.TABLE_NAME_Album_And_Genre} (id, name, id_band)
//     VALUES(
//         "${user.getId()}",
//         "${user.getName()}",
//         "${user.getIdBand()}
//     )
//     `);
//   }
// }
