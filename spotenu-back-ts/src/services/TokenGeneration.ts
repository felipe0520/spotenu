import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export class TokenGeneration {
  public generation(input: AuthenticationData): string {
    const token = jsonwebtoken.sign(
      {
        id: input.id,
        role: input.role,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn: "20min",
      }
    );
    return token;
  }

  public verify(input: string) {
    const userData = jsonwebtoken.verify(
      input,
      process.env.JWT_KEY as string
    ) as any;
    const result = { id: userData.id, role: userData.role };
    return result;
  }
}

export interface AuthenticationData {
  id: string;
  role: string;
}
