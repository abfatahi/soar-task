import { combineReducers } from "redux";
import { userSlice } from "./user";

export const reducer = combineReducers({
  user: userSlice.reducer,
});
