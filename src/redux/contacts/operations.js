import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";

const BASE_URL = "https://connections-api.goit.global";
const CONTACTS_URL = `${BASE_URL}/contacts`;

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

const getContacts = createAsyncThunk(
  "contacts/getContacts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(CONTACTS_URL, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Contacts fetched:", response.data);
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
      const response = await axios.post(CONTACTS_URL, contact, {
        headers: {
          "Content-Type": "application/json",
        },
      });
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

const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async (contact, thunkAPI) => {
    try {
      const response = await axios.put(
        `${CONTACTS_URL}/${contact.id}`,
        contact,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Contact updated:", response.data);
      toast.success("Contact updated successfully", toastSettings);
      return response.data;
    } catch (error) {
      console.log("Error updating contact:", error);
      toast.error(error.message, toastSettings);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const removeContact = createAsyncThunk(
  "contacts/removeContact",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`${CONTACTS_URL}/${id}`);
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

export { getContacts, addContact, updateContact, removeContact };
