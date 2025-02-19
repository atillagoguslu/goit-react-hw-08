import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";

const BASE_URL = "https://connections-api.goit.global";
const CONTACTS_URL = `${BASE_URL}/contacts`;

// React Hot Toast Settings
const toastSettings = {
  duration: 5000,
  position: "top-center",
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
      toast.success("Contacts fetched successfully", toastSettings);
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

const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post(CONTACTS_URL, contact, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("Contact added successfully", toastSettings);
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

const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async (contact, thunkAPI) => {
    try {
      console.log("(In Operations) Updating contact:", contact);
      const response = await axios.put(
        `${CONTACTS_URL}/${contact.id}`,
        {
          name: contact.name,
          number: contact.number,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("(In Operations) Contact updated:", response.data);
      toast.success("Contact updated successfully", toastSettings);
      return response.data;
    } catch (error) {
      console.log("(In Operations) Error updating contact:", error);
      toast.error(
        error.response.data.message || "An error occurred",
        toastSettings
      );
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const removeContact = createAsyncThunk(
  "contacts/removeContact",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`${CONTACTS_URL}/${id}`);
      toast.success("Contact removed successfully", toastSettings);
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

export { getContacts, addContact, updateContact, removeContact };
