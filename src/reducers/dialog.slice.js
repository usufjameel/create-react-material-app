import { createSlice } from "@reduxjs/toolkit";

const dialogSlice = createSlice({
  name: "dialog",
  initialState: {
    open: false,
    title: "",
    message: "",
    positiveLabel: "Ok",
    negativeLabel: "Cancel",
    response: (actionType) => {},
  },
  reducers: {
    openDialog(state, action) {
      const keys = Object.keys(action.payload);
      keys.forEach((key) => {
        state[key] = action.payload[key];
      });
      state.open = true;
    },
    closeDialog(state) {
      state.open = false;
    },
  },
});

export const ActionType = { positive: "positive", negative: "negative" };
export const { openDialog, closeDialog } = dialogSlice.actions;
export default dialogSlice.reducer;
