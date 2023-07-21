import { combineReducers } from "redux";
import naviReducer from "./naviReducer";

const allReducers = combineReducers({
  naviReducer,
});

export default allReducers;
