import { configureStore } from "@reduxjs/toolkit";
import combinationReducer from "./features/combinationSlice";

export const store = configureStore({
  reducer: {
    combination: combinationReducer,
  },
});
