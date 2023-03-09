import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exploreNft: [],
};

export const exploreSlice = createSlice({
  name: "exploreItems",
  initialState,
  reducers: {
    setExplore: (state, action) => {
      state.exploreNft = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setExplore } = exploreSlice.actions;

export default exploreSlice.reducer;
