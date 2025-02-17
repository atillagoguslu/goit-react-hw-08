import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addContactModal: false,
  editContactModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openAddContactModal: (state) => {
      console.log("Open Add Contact Modal");
      state.addContactModal = true;
    },
    closeAddContactModal: (state) => {
      state.addContactModal = false;
    },
    openEditContactModal: (state) => {
      state.editContactModal = true;
    },
    closeEditContactModal: (state) => {
      state.editContactModal = false;
    },
  },
});

export const {
  openAddContactModal,
  closeAddContactModal,
  openEditContactModal,
  closeEditContactModal,
} = modalSlice.actions;

export const selectAddContactModal = (state) => state.modal.addContactModal;
export default modalSlice.reducer;
