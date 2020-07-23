import axios from "axios";
import { baseUrl } from "../baseUrl";

export const getMusics = (token) => async (dispatch) => {
  try {
    const response = await axios.get(`${baseUrl}/users/allMusics`, {
      headers: {
        authorization: token,
      },
    });

    dispatch(getMusicsToReducer(response.data.data));
  } catch (err) {
    console.error(err.response.data.message);
  }
};

export const getMusicsToReducer = (data) => {
  return {
    type: "GET_MUSICS",
    payload: { data },
  };
};
