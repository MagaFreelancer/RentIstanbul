import { configureStore } from "@reduxjs/toolkit";
import carSlice from "./slices/carSlice";
import newsSlice from "./slices/newsSlice";

export const store = configureStore({
  reducer: {
    car: carSlice,
    news: newsSlice,

  },
});
