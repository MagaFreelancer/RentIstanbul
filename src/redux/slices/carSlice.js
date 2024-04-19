import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchCars = createAsyncThunk(
  "car/fetchCarsStatus",
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
  name: "car",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.status = "loading";
        state.items = [];
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "success";
      })
      .addCase(fetchCars.rejected, (state) => {
        state.status = "error";
        state.items = [];
      });
  },
});

export const { setItems, setCurrentPage } = carSlice.actions;

export default carSlice.reducer;
