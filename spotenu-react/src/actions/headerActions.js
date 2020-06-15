import { push } from "connected-react-router";
import { routes } from "../router";

export const goToLogin = (dispatch) => {
  dispatch(push(routes.login));
};
export const goToRegister = (dispatch) => {
  dispatch(push(routes.register));
};
