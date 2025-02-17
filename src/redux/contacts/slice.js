import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, removeContact } from "./constactsOps";

// Redux Slice:
const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [], // Empty array of contacts
    loadingStates: {
      fetch: false,
      add: false,
      delete: false,
    },
    error: null,
  },

  // Extra Reducers:
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.loadingStates.fetch = false;
      state.error = null;
    });
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.items.push(action.payload);
      state.loadingStates.add = false;
      state.error = null;
    });
    builder.addCase(removeContact.fulfilled, (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
      state.loadingStates.delete = false;
      state.error = null;
    });
    builder.addCase(fetchContacts.rejected, (state, action) => {
      state.error = action.error.message;
      state.loadingStates.fetch = false;
    });
    builder.addCase(addContact.rejected, (state, action) => {
      state.error = action.error.message;
      state.loadingStates.add = false;
    });
    builder.addCase(removeContact.rejected, (state, action) => {
      state.error = action.error.message;
      state.loadingStates.delete = false;
    });
    builder.addCase(fetchContacts.pending, (state) => {
      state.loadingStates.fetch = true;
      state.error = null;
    });
    builder.addCase(addContact.pending, (state) => {
      state.loadingStates.add = true;
      state.error = null;
    });
    builder.addCase(removeContact.pending, (state) => {
      state.loadingStates.delete = true;
      state.error = null;
    });
  },
});


export default contactsSlice.reducer;
