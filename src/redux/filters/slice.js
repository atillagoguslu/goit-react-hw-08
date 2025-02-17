import { createSlice } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";

const initialState = {
  name: "",
  number: "",
  filteredContacts: [],
};

const filterProccess = (filter, contacts) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeNameFilter: (state, action) => {
      state.name = action.payload;
      state.filteredContacts = filterProccess(action.payload, selectContacts);
    },
    changeNumberFilter: (state, action) => {
      state.number = action.payload;
      state.filteredContacts = filterProccess(action.payload, selectContacts);
    },
  },
});

export const { changeNameFilter, changeNumberFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
