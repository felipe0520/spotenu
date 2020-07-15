import bcryptjs from "bcryptjs";
const functions = require("firebase-functions");

export class HashGenerator {
  public async generate(s: string): Promise<string> {
    const salt = await bcryptjs.genSalt(Number(functions.config().bcrypt.cost));
    return await bcryptjs.hash(s, salt);
  }
  public compareHash = async (s: string, hash: string): Promise<boolean> => {
    return bcryptjs.compare(s, hash);
  };
}
