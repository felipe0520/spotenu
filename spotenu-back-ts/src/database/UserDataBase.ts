import { BaseDataBase } from "./BaseDataBase";
import { User, UserRole } from "../model/User";

export class UserDataBase extends BaseDataBase {
  protected static TABLE_NAME = "User";

  private toModel(dbModel?: any): User | undefined {
    return (
      dbModel &&
      new User(
        dbModel.name,
        dbModel.nickname,
        dbModel.email,
        dbModel.password,
        dbModel.id,
        dbModel.role,
        dbModel.aproved,
        dbModel.description
      )
    );
  }

  public async singup(user: User) {
    await this.getConnection().raw(`
    INSERT INTO ${
      UserDataBase.TABLE_NAME
    } (id, name, nickname, password, email, description, role,aproved)
    VALUES(
        "${user.getId()}",
        "${user.getName()}",
        "${user.getNickname()}",
        "${user.getPassword()}",
        "${user.getEmail()}",
        "${user.getDescription()}",
        "${user.getRole()}",
        "${user.getAproved()}"
    )
    `);
  }

  public async getUserByEmailOrNickname(
    input: string
  ): Promise<User | undefined> {
    const result = await this.getConnection().raw(`
      SELECT * from ${UserDataBase.TABLE_NAME} 
      WHERE nickname = '${input}' or email = '${input}'
      `);
    return this.toModel(await result[0][0]);
  }

  public async getBands(): Promise<User | undefined> {
    const result = await this.getConnection().raw(`
      SELECT * from ${UserDataBase.TABLE_NAME} 
      WHERE role = '${UserRole.BANDA}'
      `);
    return result[0].map((el: any) => {
      return this.toModel(el);
    });
  }

  public async approvedBand(id: string): Promise<string> {
    const bandDb = await this.getConnection().raw(`
    SELECT * from ${UserDataBase.TABLE_NAME} 
      WHERE id = '${id}'
    `);
    const band = this.toModel(await bandDb[0][0]);

    if (!band) {
      throw new Error("band is not exist");
    }

    if (band.getAproved() === 1) {
      throw new Error("band already approved");
    }

    await this.getConnection().raw(`
      UPDATE ${UserDataBase.TABLE_NAME} 
      SET aproved = 1 WHERE id = '${id}' 
      `);
    return "band successfully approved";
  }
}
