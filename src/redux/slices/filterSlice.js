import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  categoryId: 0,
  price: {min:350,max:650},
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
        state.price.min = action[0];
        state.price.max = action[1];
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
} = filterSlice.actions;

export default filterSlice.reducer;
