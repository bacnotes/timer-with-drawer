import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
  name: "timer",
  initialState: {
    isCountdown: true,
    time: 2,
  },
  reducers: {
    startTimer: (state, action) => {
      state.startTimerReducer.isCountdown =
        !state.startTimerReducer.isCountdown;
      state.time = action.payload
    },
  },
});

export const { startTimer } = timerSlice.actions;

export default timerSlice.reducer;
