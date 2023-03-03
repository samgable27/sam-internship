import { configureStore } from "@reduxjs/toolkit";
import { nftApi } from "./features/apiSlice";

export const store = configureStore({
  reducer: {
    [nftApi.reducerPath]: nftApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(nftApi.middleware),
});
