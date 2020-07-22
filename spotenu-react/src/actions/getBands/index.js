import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../../router";
import { baseUrl } from "../baseUrl";

export const getBands = (token) => async (dispatch) => {
  try {
    const response = await axios.get(`${baseUrl}/users/login`, {
      headers: {
        authorization: token,
      },
    });

    console.log(response);
  } catch (err) {
    console.error(err.response.data.message);
  }
};
