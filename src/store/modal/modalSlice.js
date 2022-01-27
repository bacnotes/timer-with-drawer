import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isModalOpen: false,
    user:{}
  },
  reducers: {
    toggleModal: (state, action) => {
      state.isModalOpen = !state.isModalOpen;
      state.user = action.payload
    },
  },
});

export const { toggleModal } = modalSlice.actions;

export default modalSlice.reducer;
