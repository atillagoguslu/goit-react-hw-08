import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
    filteredContacts: [],
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
    setFilteredContacts: (state, action) => {
      state.filteredContacts = action.payload;
    },
  },
});

export const { changeFilter, setFilteredContacts } = filtersSlice.actions;
export const selectNameFilter = (state) => state.filters.name;
export const selectFilteredContacts = (state) => state.filters.filteredContacts;
export default filtersSlice.reducer;
