import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const fetchCurrencies = createAsyncThunk(
  "currencies/fetchCurrenciesStatus",
  async () => {
    var url = "https://www.cbr-xml-daily.ru/daily_json.js";
  
    fetch(url)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log("error", error));

  }
);

const initialState = {
  currencies: [],
  status: "loading",
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    setItems(state, action) {
      state.currencies = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencies.pending, (state) => {
        state.status = "loading";
        state.currencies = [];
      })
      .addCase(fetchCurrencies.fulfilled, (state, action) => {
        state.currencies = action.payload;
        state.status = "success";
      })
      .addCase(fetchCurrencies.rejected, (state) => {
        state.status = "error";
        state.currencies = [];
      });
  },
});

export const { setItems } = carSlice.actions;

export default carSlice.reducer;
