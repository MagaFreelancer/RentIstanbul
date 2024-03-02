import { configureStore } from "@reduxjs/toolkit";
import carSlice from "./slices/carSlice";
import singleInfoSlice from "./slices/singleInfoSlice";

export const store = configureStore({
  reducer: {
    car: carSlice,
    single: singleInfoSlice,
  },
});
