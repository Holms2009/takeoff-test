import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchContacts } from "./requests";

export const fetchContactsThunk = createAsyncThunk(
  "auth/fetchAuthData",
  async () => {
    return fetchContacts();
  }
);
