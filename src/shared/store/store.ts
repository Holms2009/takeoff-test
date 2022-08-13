import { configureStore } from "@reduxjs/toolkit";

import auth from './slices/AuthForm';
import contacts from './slices/ContactsPage';

export const store = configureStore({
  reducer: {
    auth,
    contacts
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;