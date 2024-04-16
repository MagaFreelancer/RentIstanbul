import { configureStore } from "@reduxjs/toolkit";
import carSlice from "./slices/carSlice";
import singleInfoSlice from "./slices/singleInfoSlice";
import filterSlice from "./slices/filterSlice";
import currenciesSlice from "./slices/currenciesSlice";
import getCars from "./requests/getCars";

export const store = configureStore({
  reducer: {
    car: carSlice,
    singleInfo: singleInfoSlice,
    filter: filterSlice,
    currencies: currenciesSlice,
    getCars: getCars
  },
});
