import { configureStore } from "@reduxjs/toolkit";
import carSlice from "./slices/carSlice";

export const store = configureStore({
  reducer: {
    car: carSlice,
  },
});
