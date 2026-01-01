import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../State/Counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
