import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const burgerMenuSlice = createSlice({
  name: "burgerMenu",
  initialState,
  reducers: {
    openMenu: (state) => {
      state.isOpen = true;
    },
    closeMenu: (state) => {
      state.isOpen = false;
    },
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openMenu, closeMenu, toggleMenu } = burgerMenuSlice.actions;
export default burgerMenuSlice.reducer;
