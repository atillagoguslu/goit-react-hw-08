// Filters related selectors
export const selectNameFilter = (state) => state.filters.name;

export const selectFilteredContacts = (state) =>
  state.filters.filteredContacts;
