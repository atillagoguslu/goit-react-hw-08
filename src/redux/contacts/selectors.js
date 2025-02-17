// Contacts related selectors
export const selectContacts = (state) => state.contacts.items;
export const selectContactsLoadingStates = (state) =>
  state.contacts.loadingStates;
export const selectContactsError = (state) => state.contacts.error;
