import Knex from "knex";
import knex from "knex";
const functions = require("firebase-functions");

export abstract class BaseDataBase {
  private static connection: Knex | null = null;

  protected getConnection(): Knex {
    if (BaseDataBase.connection === null) {
      BaseDataBase.connection = knex({
        client: "mysql",
        connection: {
          host: functions.config().db.host,
          port: Number("3306"),
          user: functions.config().db.user,
          password: functions.config().db.password,
          database: functions.config().db.database.name,
        },
      });
    }
    BaseDataBase.connection === null;
    return BaseDataBase.connection;
  }

  public async distroyConnection(): Promise<void> {
    if (BaseDataBase.connection) {
      await BaseDataBase.connection.destroy();
    }
    BaseDataBase.connection = null;
  }
}
