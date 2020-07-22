import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../../router";
import { baseUrl } from "../baseUrl";

export const signup = (loginData) => async (dispatch) => {
  try {
    console.log(loginData);
    const response = await axios.post(`${baseUrl}/users/signup`, loginData);
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      dispatch(push(routes.feed));
    }
    alert("cadastro feito com sucesso, aguarde aprovação");
    dispatch(push(routes.login));
  } catch (err) {
    console.error(err.response.data.message);
  }
};
