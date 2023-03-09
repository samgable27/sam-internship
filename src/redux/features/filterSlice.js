import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nftFilter: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterNfts: (state, action) => {
      state.nftFilter = action.payload;
    },
  },
});

export const { filterNfts } = filterSlice.actions;

export default filterSlice.reducer;
