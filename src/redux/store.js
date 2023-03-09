import { configureStore } from "@reduxjs/toolkit";
import { nftApi } from "./features/apiSlice";
import filterSlice from "./features/filterSlice";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    [nftApi.reducerPath]: nftApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(nftApi.middleware),
});
