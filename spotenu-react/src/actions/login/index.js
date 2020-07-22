import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../../router";
import { baseUrl } from "../baseUrl";

export const login = (loginData) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/users/login`, loginData);

    localStorage.setItem("token", response.data.token);

    dispatch(push(routes.feed));
  } catch (err) {
    console.error(err.response.data.message);
  }
};
