import { configureStore } from "@reduxjs/toolkit";
import { nftApi } from "./features/apiSlice";
import exploreSlice from "./features/exploreSlice";
import itemSlice from "./features/itemSlice";

export const store = configureStore({
  reducer: {
    [nftApi.reducerPath]: nftApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(nftApi.middleware),
});
