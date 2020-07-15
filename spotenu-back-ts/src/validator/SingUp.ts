import validator from "validator";
import { User } from "../model/User";

export const validatorSingUp = (user: User) => {
  if (
    !validator.isEmail(user.getEmail()) ||
    !validator.toString(user.getName()) ||
    !validator.toString(user.getRole()) ||
    !validator.isUUID(user.getId(), 4)
  ) {
    throw new Error("Invalid input");
  }
};

export const validatorPassword = (pass: string, num: number) => {
  if (!validator.isLength(pass, { min: num })) {
    throw new Error("Invalid input");
  }
};

export const validatorDescriptionBand = (description: string | undefined) => {
  if (!description) {
    throw new Error("band description required");
  }
};
