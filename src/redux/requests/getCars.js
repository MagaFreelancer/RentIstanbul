import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCarsSlice = createAsyncThunk(
  "cars/getCarsSliceStatus",
  async () => {
    const { data } = await axios.get(
      `https://artemwebsites.ru/api/Cars`
    );
    return data;
  }
);

const initialState = {
  items: [],
  status: "loading",
  currentPage: 1,
};

const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCarsSlice.pending, (state) => {
        state.status = "loading";
        state.items = [];
      })
      .addCase(getCarsSlice.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "success";
      })
      .addCase(getCarsSlice.rejected, (state) => {
        state.status = "error";
        state.items = [];
      });
  },
});

export const { setItems } = carSlice.actions;

export default carSlice.reducer;
