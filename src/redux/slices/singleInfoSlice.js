import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  days: 1,
};

const singleInfoSlice = createSlice({
  name: "singleInfo",
  initialState,
  reducers: {
    setDay(state, action) {
      state.days = action.payload;
    },
  },
});

export const { setDay } = singleInfoSlice.actions;

export default singleInfoSlice.reducer;
