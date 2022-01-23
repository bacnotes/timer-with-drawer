import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
  name: "timer",
  initialState: {
    isCountdown: false,
    time: 1,
  },
  reducers: {
    toggleTimer: (state) => {
      state.isCountdown =
        !state.isCountdown;
    },
  },
});

export const { toggleTimer } = timerSlice.actions;

export default timerSlice.reducer;
