import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import entriesSlice from "./entries-slice";
import themeSlice from "./theme";

const persistConfig = {
  key: "root",
  version: 1,
  storage: storage,
};

const reducer = combineReducers(
  {
    entries: entriesSlice.reducer,
    theme: themeSlice.reducer,
  }
);

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
