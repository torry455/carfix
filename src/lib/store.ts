import { configureStore } from "@reduxjs/toolkit";
import burgerMenuReducer from "./burgerMenuSlice";

export const store = configureStore({
  reducer: {
    burgerMenu: burgerMenuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
