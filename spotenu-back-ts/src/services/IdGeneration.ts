import { v4 } from "uuid";

export class idGeneration {
  public generate(): string {
    return v4();
  }
}
