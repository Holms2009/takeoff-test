import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

import { fetchAuthDataThunk } from "../../../entities/AuthForm/api/asyncActions";

type TInitialState = {
  isAuth: boolean;
  fetchAuthDataState: TFetchState;
}

const initialState: TInitialState = {
  isAuth: sessionStorage.testIsAuth === 'isAuth',
  fetchAuthDataState: 'idle',
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
