import { createSlice } from "@reduxjs/toolkit";
import {
  getContacts,
  addContact,
  updateContact,
  removeContact,
} from "./operations";

const initialState = {
  items: [],
  loadingStates: {
    fetch: false,
    add: false,
    update: false,
    delete: false,
  },
  error: null,
};

// Redux Slice:
const contactsSlice = createSlice({
  name: "contacts",
  initialState,

  // Extra Reducers:
  extraReducers: (builder) => {
    builder
      .addCase(getContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loadingStates.fetch = false;
        state.error = null;
      })
      .addCase(getContacts.pending, (state) => {
        state.loadingStates.fetch = true;
        state.error = null;
      })
      .addCase(getContacts.rejected, (state, action) => {
        state.error = action.error.message;
        state.loadingStates.fetch = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loadingStates.add = false;
        state.error = null;
      })
      .addCase(addContact.pending, (state) => {
        state.loadingStates.add = true;
        state.error = null;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.error = action.error.message;
        state.loadingStates.add = false;
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.items = state.items.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        );
        state.loadingStates.update = false;
      })
      .addCase(updateContact.pending, (state) => {
        state.loadingStates.update = true;
        state.error = null;
      })
      .addCase(updateContact.rejected, (state, action) => {
        state.error = action.error.message;
        state.loadingStates.update = false;
      })
      .addCase(removeContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload
        );
        state.loadingStates.delete = false;
        state.error = null;
      })
      .addCase(removeContact.pending, (state) => {
        state.loadingStates.delete = true;
        state.error = null;
      })
      .addCase(removeContact.rejected, (state, action) => {
        state.error = action.error.message;
        state.loadingStates.delete = false;
      });
  },
});

export default contactsSlice.reducer;
