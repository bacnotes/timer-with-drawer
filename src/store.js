import { configureStore } from '@reduxjs/toolkit';
import toggleReducer from "./store/modal/modalSlice"

export const store = configureStore({
  reducer: {
    toggleReducer,
  },
});