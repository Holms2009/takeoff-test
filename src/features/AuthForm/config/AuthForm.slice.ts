import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../shared/store/store";

import { fetchAuthDataThunk } from "../api/asyncActions";

type TInitialState = {
  isAuth: boolean;
  fetchAuthDataState: TFetchState;
  error: null | string;
}

const initialState: TInitialState = {
  isAuth: false,
  fetchAuthDataState: 'idle',
  error: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuthDataThunk.pending, (state) => {
      state.fetchAuthDataState = 'loading';
    });
    builder.addCase(fetchAuthDataThunk.fulfilled, (state, action) => {
      state.fetchAuthDataState = 'finished';
    });
    builder.addCase(fetchAuthDataThunk.rejected, (state) => {
      state.fetchAuthDataState = 'failed';
    });
  },
});

export const getIsAuth = (state: RootState) => state.auth.isAuth;

export const { setIsAuth } = authSlice.actions;
export default authSlice.reducer;
