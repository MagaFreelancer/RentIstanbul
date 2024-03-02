import { configureStore } from "@reduxjs/toolkit";
import carSlice from "./slices/carSlice";
<<<<<<< HEAD
import singleInfoSlice from "./slices/singleInfoSlice";
=======
import filterSlice from "./slices/filterSlice";
import currenciesSlice from "./slices/currenciesSlice";
>>>>>>> gadji_2-redux

export const store = configureStore({
  reducer: {
    car: carSlice,
<<<<<<< HEAD
    single: singleInfoSlice,
=======
    filter: filterSlice,
    currencies: currenciesSlice
>>>>>>> gadji_2-redux
  },
});
