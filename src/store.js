import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import rootReducers from "./reducers";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: rootReducers,
});

export const persistor = persistStore(store);
