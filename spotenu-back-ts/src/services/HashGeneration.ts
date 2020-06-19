import bcryptjs from "bcryptjs";

export class HashGeneration {
  public async generate(s: string): Promise<string> {
    const salt = await bcryptjs.genSalt(Number(process.env.BCRYPT_COST));
    return await bcryptjs.hash(s, salt);
  }
}
