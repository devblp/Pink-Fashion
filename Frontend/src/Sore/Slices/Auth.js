import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  avatar: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.avatar = action.payload.avatar;
    },
    logout: (state) => {
      (state.token = null) (state.user = null);
    },
  },
});
export const {login,logout}=authSlice.actions
export default authSlice.reducer