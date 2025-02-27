import { combineReducers } from "redux";
import { userSlice } from "./user";
import { transactionSlice } from "./transactions";

export const reducer = combineReducers({
  user: userSlice.reducer,
  transaction: transactionSlice.reducer,
});
