import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

import { fetchContactsThunk } from "../../api/Contacts/asyncActions";

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
  reducers: {
    setContactsData: (state, action: PayloadAction<TContactData[]>) => {
      state.contactsData = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContactsThunk.pending, (state) => {
      state.fetchContactsState = 'loading';
    });
    builder.addCase(fetchContactsThunk.fulfilled, (state, action: PayloadAction<TContactData[]>) => {
      state.fetchContactsState = 'finished';
      state.contactsData = action.payload;
    });
    builder.addCase(fetchContactsThunk.rejected, (state) => {
      state.fetchContactsState = 'failed';
    });
  },
});

export const { setContactsData } = contactsPageSlice.actions;

export const getContacts = (state: RootState) => state.contacts.contactsData;

export default contactsPageSlice.reducer;
