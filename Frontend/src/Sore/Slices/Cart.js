

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeItem: (state, action) => {
      state.list = state.list.filter((e) => {
        if (e.id === action.payload) {
          e.quantity -= 1;
          if (e.quantity === 0) {
            return false;
          }
        }
        return true;
      });
    },
    addItem: (state, action) => {
      let itemExists = false;
      state.list = state.list.map((e) => {
        if (e.id === action.payload.id) {
          itemExists = true;
          e.quantity=e.quantity+1
          return e
        }
        return e;
      });
      if (!itemExists) {
        state.list.push({ ...action.payload, quantity: 1 });
      }
    },
    clear: (state) => {
      state.list = [];
    },
  },
});

export const { addItem, removeItem, clear } = cartSlice.actions;
export default cartSlice.reducer;