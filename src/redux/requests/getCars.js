import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCarsNodFilter = createAsyncThunk(
  "cars/fetchCarsStatus",
  async () => {
    const { data } = await axios.get(
      'https://artemwebsites.ru/api/Cars'
    );
    return data;
  }
);

const initialState = {
  items: [],
  status: "loading",
};

const carFilterSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCarsNodFilter.pending, (state) => {
        state.status = "loading";
        state.items = [];
      })
      .addCase(getCarsNodFilter.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "success";
      })
      .addCase(getCarsNodFilter.rejected, (state) => {
        state.status = "error";
        state.items = [];
      });
  },
});

export const { setItems } = carFilterSlice.actions;

export default carFilterSlice.reducer;
