import { combineReducers } from "redux";
import personsReducer from "./personsReducer";

export default combineReducers({
  persons: personsReducer
});
