import { configureStore } from "@reduxjs/toolkit";
import carSlice from "./slices/carSlice";
import filterSlice from "./slices/filterSlice";
import currenciesSlice from "./slices/currenciesSlice";

export const store = configureStore({
  reducer: {
    car: carSlice,
    filter: filterSlice,
    currencies: currenciesSlice
  },
});
