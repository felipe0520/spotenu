import validator from "validator";
import { TypeUserLogin } from "../business/login/typeLogin";

export const validatorLogin = (userData: TypeUserLogin) => {
  if (
    !validator.toString(userData.nameOrNickname) ||
    !validator.toString(userData.password)
  )
    throw new Error("invalid input");
};
