import { BaseDataBase } from "./BaseDataBase";
import { User } from "../model/User";

export class UserDataBase extends BaseDataBase {
  protected static TABLE_NAME = "Users";

  public singup(user: User) {
    this.getConnection().raw(`
    INSERT INTO ${
      UserDataBase.TABLE_NAME
    } (id, name, nickname, password, email, description, role)
    VALUES(
        "${user.getId()}",
        "${user.getName()}",
        "${user.getNickname()}",
        "${user.getPassword()}",
        "${user.getEmail()}",
        "${user.getDescription()}",
        "${user.getRole()}"
    )
    `);
  }
}
