import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const nftApi = createApi({
  reducerPath: "nftApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://us-central1-nft-cloud-functions.cloudfunctions.net",
  }),
  endpoints: (builder) => ({
    getNewItems: builder.query({
      query: () => "/newItems",
    }),
    getExplore: builder.query({
      query: () => "/explore",
    }),
    getFilter: builder.query({
      query: (value) => `/explore?filter=${value}`,
    }),
  }),
});

export const { useGetNewItemsQuery, useGetExploreQuery, useGetFilterQuery } =
  nftApi;
