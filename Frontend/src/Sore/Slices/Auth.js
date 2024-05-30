import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  token: null,
  toast: { type: "info", message: " " },
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.toast = action.payload.toast;
    },
    logout: (state) => {
      state.token = null;
      state.user = {};
    },
  },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
