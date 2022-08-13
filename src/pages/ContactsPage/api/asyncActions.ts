import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchContacts } from "./request";

export const fetchContactsThunk = createAsyncThunk(
  "auth/fetchAuthData",
  async () => {
    return fetchContacts();
  }
);
