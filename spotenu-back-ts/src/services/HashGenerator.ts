import bcryptjs from "bcryptjs";

export class HashGenerator {
  public async generate(s: string): Promise<string> {
    const salt = await bcryptjs.genSalt(Number(process.env.BCRYPT_COST));
    return await bcryptjs.hash(s, salt);
  }
  public compareHash = async (s: string, hash: string): Promise<boolean> => {
    return bcryptjs.compare(s, hash);
  };
}
