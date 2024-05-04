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
        if (e.id == action.payload) {
          e.quantity = e.quantity - 1;
          if (e.quantity == 0) {
            return false;
          }
          return e;
        }
        return true;
      });
    },
    addItem: (state, action) => {
      state.list = state.list?.map((e) => {
        let add = false;
        if (e.id == action.payload.id) {
          e.quantity = e.quantity + 1;
          add = true;
          return e;
        }
        return e;
      });
      if (!add) {
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
