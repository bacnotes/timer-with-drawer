import { configureStore } from '@reduxjs/toolkit';
import toggleModalReducer from "./store/modal/modalSlice";
import startTimerReducer from "./store/Timer/timerSlice";

export const store = configureStore({
  reducer: {
    toggleModalReducer,
    startTimerReducer,
  },
});