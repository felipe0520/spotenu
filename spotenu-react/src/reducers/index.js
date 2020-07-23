import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import ReducerMusics from "./musics";

export const generateReducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    ReducerMusics,
  });
