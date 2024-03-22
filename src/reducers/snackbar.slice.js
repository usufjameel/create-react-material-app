import { createSlice } from "@reduxjs/toolkit";

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState: {
    open: false,
    type: "success",
    message: "",
  },
  reducers: {
    openSnackbar(state, action) {
      const keys = Object.keys(action.payload);
      keys.forEach((key) => {
        state[key] = action.payload[key];
      });
    },
  },
});

export const SnackbarType = {
  success: "success",
  warning: "warning",
  info: "info",
  error: "error",
};
export const { openSnackbar } = snackbarSlice.actions;
export default snackbarSlice.reducer;
