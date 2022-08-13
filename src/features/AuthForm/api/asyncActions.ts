import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchAuthData } from "./request";

export const fetchAuthDataThunk = createAsyncThunk(
  "auth/fetchAuthData",
  async () => {
    return fetchAuthData();
  }
);
