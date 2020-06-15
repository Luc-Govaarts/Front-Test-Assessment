import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import feed from "./feed/reducer"

export default combineReducers({
  appState,
  user,
  feed
});
