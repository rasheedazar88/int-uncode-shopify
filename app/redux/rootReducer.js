// app/rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import storesReducer from "./storeSlice";
import userReducer from "./userSlice";

const rootReducer = combineReducers({
  stores: storesReducer,
  user: userReducer,
});

export default rootReducer;
