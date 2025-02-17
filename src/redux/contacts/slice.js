import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, removeContact } from "./constactsOps";

const initialState = {
  items: [],
  loadingStates: {
    fetch: false,
    add: false,
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
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loadingStates.fetch = false;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loadingStates.add = false;
        state.error = null;
      })
      .addCase(removeContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload
        );
        state.loadingStates.delete = false;
        state.error = null;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.error = action.error.message;
        state.loadingStates.fetch = false;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.error = action.error.message;
        state.loadingStates.add = false;
      })
      .addCase(removeContact.rejected, (state, action) => {
        state.error = action.error.message;
        state.loadingStates.delete = false;
      })
      .addCase(fetchContacts.pending, (state) => {
        state.loadingStates.fetch = true;
        state.error = null;
      })
      .addCase(addContact.pending, (state) => {
        state.loadingStates.add = true;
        state.error = null;
      })
      .addCase(removeContact.pending, (state) => {
        state.loadingStates.delete = true;
        state.error = null;
      });
  },
});

export default contactsSlice.reducer;
