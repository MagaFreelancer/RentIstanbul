import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSingleCar = createAsyncThunk(
  "singleInfo/fetchSingleInfoStatus",
  async (params) => {
    const id = params;
    const { data } = await axios.get(
      `https://65b2d2a29bfb12f6eafe789c.mockapi.io/Items/${id}`
    );
    return data;
  }
);
const initialState = {
  item: {},
  id: null,
  days: 1,
  showModal: false,
  status: "loading",
};

const singleInfoSlice = createSlice({
  name: "singleInfo",
  initialState,
  reducers: {
    setDay(state, action) {
      state.days = action.payload;
    },
    setId(state, action) {
      state.id = action.payload;
    },
    toggleShowModal(state, action) {
      state.showModal = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleCar.pending, (state) => {
        state.status = "loading";
        state.item = {};
      })
      .addCase(fetchSingleCar.fulfilled, (state, action) => {
        state.item = action.payload;
        state.status = "success";
      })
      .addCase(fetchSingleCar.rejected, (state) => {
        state.status = "error";
        state.item = {};
      });
  },
});

export const { setDay, setId, toggleShowModal } = singleInfoSlice.actions;

export default singleInfoSlice.reducer;
