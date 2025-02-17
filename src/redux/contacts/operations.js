import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";
const API_PREFIX = "67acb2553f5a4e1477db8b91";
const API_URL = `https://${API_PREFIX}.mockapi.io/`;
const API_RESOURCE = "contacts";

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

const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (sortBy = null, thunkAPI) => {
    try {
      const params = sortBy ? { sortBy, order: "asc" } : {};
      const response = await axios.get(`${API_URL}/${API_RESOURCE}`, {
        params,
      });
      console.log("Fetching contacts:", response.data);
      toast.success("Contacts fetched successfully", toastSettings);
      return response.data;
    } catch (error) {
      console.log("Error fetching contacts:", error);
      toast.error(error.message, toastSettings);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}/${API_RESOURCE}`, contact);
      console.log("Contact added:", response.data);
      toast.success("Contact added successfully", toastSettings);
      return response.data;
    } catch (error) {
      console.log("Error adding contact:", error);
      toast.error(error.message, toastSettings);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const removeContact = createAsyncThunk(
  "contacts/removeContact",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`${API_URL}/${API_RESOURCE}/${id}`);
      console.log("Contact removed:", response.data);
      toast.success("Contact removed successfully", toastSettings);
      return response.data;
    } catch (error) {
      console.log("Error removing contact:", error);
      toast.error(error.message, toastSettings);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export { fetchContacts, addContact, removeContact };
