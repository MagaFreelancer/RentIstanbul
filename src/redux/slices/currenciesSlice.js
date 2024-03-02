import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCurrencies = createAsyncThunk(
  "currencies/fetchCurrenciesStatus",
  async () => {
    const { data } = await axios.get(
      `https://www.cbr-xml-daily.ru/daily_json.js`
    );
  
    return data.Valute;
  }
);

const initialState = {
  currencies: [],
  curren: 'RUB',
  statusCur: "loading",
};

const currenciesSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    setItems(state, action) {
      state.currencies = action.payload;
    },
    setCurren(state, action) {
      state.curren = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencies.pending, (state) => {
        state.statusCur = "loading";
        state.currencies = [];
      })
      .addCase(fetchCurrencies.fulfilled, (state, action) => {
        state.currencies = action.payload;
        state.statusCur = "success";
      })
      .addCase(fetchCurrencies.rejected, (state) => {
        state.statusCur = "error";
        state.currencies = [];
      });
  },
});

export const { setItems, setCurren } = currenciesSlice.actions;

export default currenciesSlice.reducer;
