import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    login(state, action) {
      const keys = Object.keys(action.payload);
      keys.forEach((key) => {
        state[key] = action.payload[key];
      });
    },
    logout(state, action) {
      const keys = Object.keys(state);
      keys.forEach((key) => {
        state[key] = null;
      });
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
