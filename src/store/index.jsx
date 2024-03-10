import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter";
import addReducer from "../features/Add";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    add: addReducer,
  },
});
