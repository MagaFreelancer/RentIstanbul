import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  gearboxs: 'any',
  categoryId: ['all', 'middle'],
  year: 1970,
  price: [350, 650],
  engine: ['petrol'],
  sort: {
    name: "От дешевых к дорогим",
    sortProperty: "-price",
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setPrice(state, action) {
      state.price = action.payload;
    },
    setEngine(state, action) {
      const findItem = state.engine.find((item) => item === action.payload);

      if(findItem) {
        state.engine.splice(findItem);
      }else {
        state.engine.push(action.payload);
      }
    },
    setYear(state, action) {
      state.year = action.payload
    },
    setGearbox(state, action) {
      state.gearboxs = action.payload
    },
    // setCurrentPage(state, action) {
    //   state.currentPage = action.payload;
    // },
    setFilters(state, action) {
      state.sort = action.payload.sort;
      state.categoryId = Number(action.payload.categoryId);
    },
  },
});

export const {
  setCategoryId,
  setSort,
  setPrice,
  setEngine,
  setYear,
  setGearbox,
  setFilters,
  setSearchValue,
} = filterSlice.actions;

export default filterSlice.reducer;
