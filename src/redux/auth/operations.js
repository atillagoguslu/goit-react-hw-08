import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";

//Endpoints
const BASE_URL = "https://connections-api.goit.global";
const USERS_SIGNUP_URL = `${BASE_URL}/users/signup`;
const USERS_LOGIN_URL = `${BASE_URL}/users/login`;
const USERS_LOGOUT_URL = `${BASE_URL}/users/logout`;
const USERS_CURRENT_URL = `${BASE_URL}/users/current`;

axios.defaults.baseURL = BASE_URL;
// Axios Auth Header updated in slice.js so no need to update it here

// React Hot Toast Settings
const toastSettings = {
  duration: 5000,
  position: "top-right",
  icon: "🔥",
  style: {
    borderRadius: "10px",
    background: "#333",
    color: "#fff",
  },
  success: {
    icon: "✅",
  },
  error: {
    icon: "❌",
  },
};

const signup = createAsyncThunk(
  "auth/signup",
  async (registerInfo, thunkAPI) => {
    try {
      const response = await axios.post(USERS_SIGNUP_URL, registerInfo);
      toast.success("User registered successfully", toastSettings);
      return response.data;
    } catch (error) {
      toast.error(
        error.response.data.message || "An error occurred",
        toastSettings
      );
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const login = createAsyncThunk("auth/login", async (loginInfo, thunkAPI) => {
  try {
    const response = await axios.post(USERS_LOGIN_URL, loginInfo);
    toast.success("User logged in successfully", toastSettings);
    return response.data;
  } catch (error) {
    toast.error(
      error.response.data.message || "An error occurred",
      toastSettings
    );
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const logout = createAsyncThunk("auth/logout", async (logoutInfo, thunkAPI) => {
  try {
    const response = await axios.post(USERS_LOGOUT_URL, logoutInfo);
    toast.success("User logged out successfully", toastSettings);
    return response.data;
  } catch (error) {
    toast.error(
      error.response.data.message || "An error occurred",
      toastSettings
    );
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

export { signup, login, logout, currentUser };
