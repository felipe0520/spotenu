import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../../router";

const baseUrl = "https://us-central1-spotenu-felipe.cloudfunctions.net/api";

export const login = (loginData) => async (dispatch) => {
  console.log("fui chamado fora try");
  try {
    console.log("fui chamado dentro try");
    const response = await axios.post(`${baseUrl}/users/login`, loginData);
    localStorage.setItem("token", response.data.token);

    dispatch(push(routes.feed));
  } catch (err) {
    console.error(err.response.data.message);
  }
};
