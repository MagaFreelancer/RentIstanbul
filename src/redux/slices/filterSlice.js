import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  categoryIds: [
    { text: "Все", value: "all", active: true },
    { text: "Компактные", value: "compact", active: false },
    { text: "Средний класс", value: "middle", active: false },
    { text: "Кроссоверы", value: "crossovers", active: false },
    { text: "Люкс", value: "lux", active: false },
  ],
  price: [350, 650],
  yearCar: 2012,
  engine: [
    {
      sortProperty: "petrol",
      title: "Бензин",
      checked: true,
    },
    {
      sortProperty: "diesel",
      title: "Дизель",
      checked: false,
    },
    {
      sortProperty: "electro",
      title: "Электо/Гибрид",
      checked: false,
    },
  ],
  box: 0,
  sort: {
    name: "От дешевых к дорогим",
    sortProperty: "-price",
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryIds(state, action) {
      state.categoryIds = action.payload;
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
    setYearCar(state, action) {
      state.yearCar = action.payload;
    },
    setEngine(state, action) {
      state.engine = action.payload;
    },
    setBox(state, action) {
      state.box = action.payload;
      console.log(action.payload);
    },
    setFilters(state, action) {
      state.sort = action.payload.sort;
      state.categoryId = action.payload.categoryId;
      state.yearCar = Number(action.payload.yearCar);
      state.engine = action.payload.engine;
      state.box = action.payload.box;
      state.price = action.payload.price;
    },
    // setCurrentPage(state, action) {
    //   state.currentPage = action.payload;
    // },
  },
});

export const {
  setCategoryIds,
  setSort,
  setFilters,
  setSearchValue,
  setPrice,
  setYearCar,
  setEngine,
  setBox,
} = filterSlice.actions;

export default filterSlice.reducer;
