import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  gearboxs: 'any',
  categoryId: [
    { text: "Все", value: "all", active: true, category: 0 },
    { text: "Компактные", value: "compact", active: false, category: 1 },
    { text: "Средний класс", value: "middle", active: false, category: 2 },
    { text: "Кроссоверы", value: "crossovers", active: false, category: 3 },
    { text: "Люкс", value: "lux", active: false, category: 4 },
  ],
  year: 1970,
  price: [350, 650],
  engine: [
    { gearbox: "petrol", title: "Бензин", checked: true },
    { gearbox: "diesel", title: "Дизель", checked: false },
    { gearbox: "electro", title: "Электо/Гибрид", checked: false },
  ],
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
      state.engine = action.payload;
    },
    setYear(state, action) {
      state.year = action.payload
    },
    setGearbox(state, action) {
      state.gearboxs = action.payload
    },
    setFilters(state, action) {
      state.sort = action.payload.sort;
      state.year = Number(action.payload.year);
      state.engine = action.payload.engineArr;
      state.gearboxs = action.payload.gearboxs;
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
