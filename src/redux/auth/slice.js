/*auth Slice Operasyonları

redux/auth/operations.js dosyasına, createAsyncThunk kullanarak kullanıcıyla ilgili işlemleri ekleyin:

register - Yeni bir kullanıcı kaydı için. Temel action tipi "auth/register". RegistrationForm bileşeninde, kayıt sayfasında kullanılır.
login - Mevcut bir kullanıcı için giriş yapma. Temel action tipi "auth/login". LoginForm bileşeninde, giriş sayfasında kullanılır.
logout - Uygulamadan çıkış yapma. Temel action tipi "auth/logout". Uygulamanın üst kısmındaki UserMenubileşeninde kullanılır.
refreshUser - Token ile kullanıcıyı yenileme. Temel action tipi "auth/refresh". App bileşeninin montajı sırasında kullanılır.


Yetkili kullanıcının tokeni persist kütüphanesi yardımıyla yerel depolamada saklanmalıdır. */

import { createSlice } from "@reduxjs/toolkit";
import { signup, login, logout, currentUser } from "./operations";
import axios from "axios";

const updateAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = null;
};

// This cannot be changed
const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

// Extra Reducers
// Fullfilled first
// Pending second
// Rejected third

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(signup.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      updateAuthHeader(state.token);
    });
    builder.addCase(signup.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signup.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      updateAuthHeader(state.token);
    });
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isRefreshing = false;
      clearAuthHeader();
    });
    builder.addCase(logout.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(logout.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(currentUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    });
    builder.addCase(currentUser.pending, (state) => {
      state.isRefreshing = true;
    });
    builder.addCase(currentUser.rejected, (state) => {
      state.isRefreshing = false;
    });
  },
});

export default authSlice.reducer;
