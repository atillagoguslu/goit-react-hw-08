import { createSlice } from "@reduxjs/toolkit";
import {
  getContacts,
  addContact,
  updateContact,
  removeContact,
} from "../contacts/operations";
import { toast } from "react-hot-toast";

const initialState = {
  name: "",
  number: "",
  filteredContacts: [],
  searchType: "name",
  sortType: "creationDate",
};

const filterProccess = (filter, contacts, searchType) => {
  if (!filter || !contacts) {
    return contacts || [];
  }
  return contacts.filter((contact) => {
    if (searchType === "name") {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    } else if (searchType === "number") {
      return contact.number.includes(filter);
    }
    return true;
  });
};

const sortContacts = (contacts, sortType) => {
  if (!contacts) {
    toast.error("No contacts to be sorted");
    return [];
  }

  return [...contacts].sort((a, b) => {
    switch (sortType) {
      case "name":
        return a.name.localeCompare(b.name);
      case "number":
        return a.number.localeCompare(b.number);
      case "creationDate":
        // Return as original
        return a.id.localeCompare(b.id);
      default:
        return 0;
    }
  });
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    initFilteredContacts: (state, action) => {
      state.filteredContacts = sortContacts(action.payload, state.sortType);
    },
    changeNameFilter: (state, action) => {
      state.name = action.payload.filter;
      const filtered = filterProccess(
        action.payload.filter,
        action.payload.contacts,
        "name"
      );
      state.filteredContacts = sortContacts(filtered, state.sortType);
    },
    changeNumberFilter: (state, action) => {
      state.number = action.payload.filter;
      const filtered = filterProccess(
        action.payload.filter,
        action.payload.contacts,
        "number"
      );
      state.filteredContacts = sortContacts(filtered, state.sortType);
    },
    changeSearchType: (state, action) => {
      state.searchType = action.payload;
    },
    changeSortType: (state, action) => {
      state.sortType = action.payload;
      state.filteredContacts = sortContacts(
        state.filteredContacts,
        action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContacts.fulfilled, (state, action) => {
        state.filteredContacts = action.payload;
        state.name = "";
        state.number = "";
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.filteredContacts.push(action.payload);
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.filteredContacts = state.filteredContacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        );
      })
      .addCase(removeContact.fulfilled, (state, action) => {
        state.filteredContacts = state.filteredContacts.filter(
          (contact) => contact.id !== action.payload
        );
      });
  },
});

export const {
  changeNameFilter,
  changeNumberFilter,
  initFilteredContacts,
  changeSearchType,
  changeSortType,
} = filtersSlice.actions;

export default filtersSlice.reducer;
