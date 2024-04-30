import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSingleCar = createAsyncThunk(
  "singleInfo/fetchSingleInfoStatus",
  async (id) => {
    const { data } = await axios.get(`https://artemwebsites.ru/api/Cars/${id}`);

    return data;
  }
);
const initialState = {
  item: {},
  id: null,
  days: 1,
  showModal: false,
  modalStatusAdmin: 'edit', //edit | add
  statusAdmin: 'add', //add | added
  showSlider: false,
  sliderImgs: [],
  sliderIndex: [],
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
    toggleShowSlider(state, action) {
      state.showSlider = action.payload;
    },
    setImgs(state, action) {
      state.sliderImgs = action.payload;
    },
    setSliderIndex(state, action) {
      state.sliderIndex = action.payload;
    },
    setModalStatusAdmin(state, action) {
      state.modalStatusAdmin = action.payload;
    }
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

export const {
  setDay,
  setId,
  toggleShowModal,
  toggleShowSlider,
  setImgs,
  setSliderIndex,
  setModalStatusAdmin
} = singleInfoSlice.actions;

export default singleInfoSlice.reducer;
