import { configureStore } from "@reduxjs/toolkit";
import carSlice from "./slices/carSlice";
import filterSlice from "./slices/filterSlice";

export const store = configureStore({
  reducer: {
    car: carSlice,
    filter: filterSlice,
  },
});
