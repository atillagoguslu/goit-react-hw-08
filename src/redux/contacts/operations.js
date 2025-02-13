import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_PREFIX = "67acb2553f5a4e1477db8b91";
const API_URL = `https://${API_PREFIX}.mockapi.io/`;
const API_RESOURCE = "contacts";

const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (sortBy = null, thunkAPI) => {
    try {
      const params = sortBy ? { sortBy, order: "asc" } : {};
      const response = await axios.get(`${API_URL}/${API_RESOURCE}`, {
        params,
      });
      console.log("Fetching contacts:", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}/${API_RESOURCE}`, contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const removeContact = createAsyncThunk(
  "contacts/removeContact",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`${API_URL}/${API_RESOURCE}/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export { fetchContacts, addContact, removeContact };
