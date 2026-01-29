import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { bauhausReducer } from "./bauhaus";

const reducers = combineReducers({
  projet: bauhausReducer,
});

export const store = configureStore({
  reducer: reducers,
});
