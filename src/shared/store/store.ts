import { configureStore } from "@reduxjs/toolkit";

import auth from './slices/AuthForm';

export const store = configureStore({
  reducer: {
    auth,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;