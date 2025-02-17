// Auth related selectors
const selectAuth = (state) => state.auth;

export const selectUser = (state) => selectAuth(state).user;
export const selectToken = (state) => selectAuth(state).token;
export const selectIsLoggedIn = (state) => selectAuth(state).isLoggedIn;
export const selectIsRefreshing = (state) => selectAuth(state).isRefreshing;
export const selectIsLoading = (state) => selectAuth(state).isLoading;
