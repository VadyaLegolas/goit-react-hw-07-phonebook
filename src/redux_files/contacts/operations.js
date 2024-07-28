import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://667fa134f2cb59c38dc956a0.mockapi.io/phonebook";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
  const response = await axios.get("/contacts");
  return await response.data;
});

export const addContact = createAsyncThunk("contacts/addContact", async contact => {
    const response = await axios.post("/contacts", contact);
    return await response.data;
}
    
)

export const deleteContact = createAsyncThunk("contacts/deleteContact", async id => {
    const response = await axios.delete(`/contacts/${id}`);
    return await response.data;
})
