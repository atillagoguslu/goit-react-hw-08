import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Endpoints
const BASE_URL = "https://connections-api.goit.global";
const USERS_SIGNUP_URL = `${BASE_URL}/users/signup`;
const USERS_LOGIN_URL = `${BASE_URL}/users/login`;
const USERS_LOGOUT_URL = `${BASE_URL}/users/logout`;
const USERS_CURRENT_URL = `${BASE_URL}/users/current`;
const CONTACTS_URL = `${BASE_URL}/contacts`;

axios.defaults.baseURL = BASE_URL;

const signup = createAsyncThunk(
  "auth/signup",
  async (registerInfo, thunkAPI) => {
    try {
      const response = await axios.post(USERS_SIGNUP_URL, registerInfo);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const login = createAsyncThunk("auth/login", async (loginInfo, thunkAPI) => {
  try {
    const response = await axios.post(USERS_LOGIN_URL, loginInfo);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const logout = createAsyncThunk("auth/logout", async (logoutInfo, thunkAPI) => {
  try {
    const response = await axios.post(USERS_LOGOUT_URL, logoutInfo);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const currentUser = createAsyncThunk(
  "auth/current",
  async (currentInfo, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("No token provided");
    }

    try {
      const response = await axios.get(USERS_CURRENT_URL, {
        headers: { Authorization: `Bearer ${persistedToken}` },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const getContacts = createAsyncThunk("contacts/getContacts", async (_, thunkAPI) => {
  try {
    const response = await axios.get(CONTACTS_URL);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export { signup, login, logout, currentUser, getContacts };
