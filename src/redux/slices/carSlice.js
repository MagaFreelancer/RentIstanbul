import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchCars = createAsyncThunk(
  "car/fetchCarsStatus",
  async (params) => {
    const { order,search, sortBy, currentPage } = params;
    const { data } = await axios.get(
      `https://65b2d2a29bfb12f6eafe789c.mockapi.io/Items?page=${currentPage}&limit=9&sortBy=${sortBy}&order=${order}${search}`
      
    );
    return data;
  }
);

const initialState = {
  items: [],
  status: "loading",
  currentPage: 1
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
