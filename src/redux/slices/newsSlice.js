import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNews = createAsyncThunk(
  "news/fetchNewsStatus",
  async () => {
    const { data } = await axios.get(
      `https://65cbf969efec34d9ed8851b2.mockapi.io/newBase`
    );
    return data;
  }
);

const initialState = {
  items: [],
  status: "loading",
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = "loading";
        state.items = [];
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "success";
      })
      .addCase(fetchNews.rejected, (state) => {
        state.status = "error";
        state.items = [];
      });
  },
});

export const { setItems } = newsSlice.actions;

export default newsSlice.reducer;
