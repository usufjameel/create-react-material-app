import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import UserReducer from "./user.slice";
import LoadingReducer from "./loading.slice";
import DialogReducer from "./dialog.slice";
import SnackbarReducer from "./snackbar.slice";

import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: UserReducer,
  loader: LoadingReducer,
  dialog: DialogReducer,
  snackbar: SnackbarReducer,
});

export default persistReducer(persistConfig, rootReducer);
// export default rootReducer;
