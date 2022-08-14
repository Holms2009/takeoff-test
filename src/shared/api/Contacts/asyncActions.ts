import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchContacts } from "./requests";

export const fetchContactsThunk = createAsyncThunk(
  "contacts/fetchContactsData",
  async () => {
    return fetchContacts();
  }
);
