import { combineReducers } from "redux";
import article from "./article";
import search from "./search";

const rootReducer = combineReducers({
  article,
  search,
});

export default rootReducer;
