import { configureStore, createSlice } from "@reduxjs/toolkit";
import toggleSlice from "./ui-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: { toggle: toggleSlice.reducer, cart: cartSlice.reducer },
});

const toggleActions = toggleSlice.actions;
const cartActions = cartSlice.actions;

export { store, toggleActions, cartActions };
