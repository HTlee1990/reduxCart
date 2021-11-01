import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { items: [], totalQuantity: 0, changed: false };
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },

    add(state, action) {
      const { price, title } = action.payload;
      const existingItem = state.items.find((item) => item.title === title);
      state.changed = true;
      if (!existingItem) {
        state.items.push({ title, price, quantity: 1, total: price });
      } else {
        existingItem.quantity++;
        existingItem.total += price;
      }
      state.totalQuantity++;
    },

    decrease(state, action) {
      const title = action.payload;
      const existingItem = state.items.find((item) => item.title === title);
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.title != title);
        state.totalQuantity--;
      } else {
        existingItem.quantity--;
        existingItem.total -= existingItem.price;
        state.totalQuantity--;
      }
    },
    increase(state, action) {
      const title = action.payload;
      const existingItem = state.items.find((item) => item.title === title);
      state.changed = true;
      existingItem.total += existingItem.price;
      existingItem.quantity++;
      state.totalQuantity++;
    },
  },
});

export default cartSlice;
