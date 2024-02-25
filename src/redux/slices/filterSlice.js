import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  categoryId: 0,
  price: [350, 650],
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
  setFilters,
  setSearchValue,
  setPrice
} = filterSlice.actions;

export default filterSlice.reducer;
