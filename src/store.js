import { configureStore } from '@reduxjs/toolkit';
import toggleModalReducer from "./store/modal/modalSlice";
import toggleTimerReducer from "./store/timer/timerSlice";

export const store = configureStore({
  reducer: {
    toggleModalReducer,
    toggleTimerReducer,
  },
});