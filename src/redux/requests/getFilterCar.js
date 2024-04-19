import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getFilterCar = createAsyncThunk(
  "cars/fetchCarsStatus",
  async (sortProperty) => {
    const { data } = await axios.get(
      `https://artemwebsites.ru/api/Cars?sortorder=${sortProperty}`
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
      .addCase(getFilterCar.pending, (state) => {
        state.status = "loading";
        state.items = [];
      })
      .addCase(getFilterCar.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "success";
      })
      .addCase(getFilterCar.rejected, (state) => {
        state.status = "error";
        state.items = [];
      });
  },
});

export const { setItems } = carFilterSlice.actions;

export default carFilterSlice.reducer;
