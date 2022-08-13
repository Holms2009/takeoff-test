import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

import { fetchAuthDataThunk } from "../../../entities/AuthForm/api/asyncActions";

type TInitialState = {
  contactsData: TContactData[];
  fetchContactsState: TFetchState;
}

const initialState: TInitialState = {
  contactsData: [],
  fetchContactsState: 'idle',
};

const contactsPageSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAuthDataThunk.pending, (state) => {
      state.fetchContactsState = 'loading';
    });
    builder.addCase(fetchAuthDataThunk.fulfilled, (state, action: PayloadAction<TContactData[]>) => {
      state.fetchContactsState = 'finished';
      state.contactsData = action.payload;
    });
    builder.addCase(fetchAuthDataThunk.rejected, (state) => {
      state.fetchContactsState = 'failed';
    });
  },
});

export const getContacts = (state: RootState) => state.contacts.contactsData;

export default contactsPageSlice.reducer;
