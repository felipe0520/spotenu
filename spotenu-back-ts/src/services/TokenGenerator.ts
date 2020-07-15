import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
const functions = require("firebase-functions");

dotenv.config();

export class TokenGenerator {
  public generation(input: AuthenticationData): string {
    const token = jsonwebtoken.sign(
      {
        id: input.id,
        role: input.role,
      },
      functions.config().jwt.key as string,
      {
        expiresIn: "20min",
      }
    );
    return token;
  }

  public verify(input: string) {
    const userData = jsonwebtoken.verify(
      input,
      functions.config().jwt.key as string
    ) as any;
    const result = { id: userData.id, role: userData.role };
    return result;
  }
}

export interface AuthenticationData {
  id: string;
  role: string;
}
