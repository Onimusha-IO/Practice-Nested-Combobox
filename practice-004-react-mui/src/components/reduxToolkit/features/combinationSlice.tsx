import { createSlice } from "@reduxjs/toolkit";

const initialState = ["", "", "", "", "", "", ""];

const local = (initial = initialState) => {
  if (localStorage.getItem("bakeryData")) {
    return JSON.parse(localStorage.getItem("bakeryData") || "{}");
  }

  return initial;
};

const state = local();

export const combinationSlice = createSlice({
  name: "combinations",
  initialState: state,
  reducers: {
    setSelected: (state, action) => {
      return action.payload.value;
    },
  },
});

export const { setSelected } = combinationSlice.actions;
export default combinationSlice.reducer;
