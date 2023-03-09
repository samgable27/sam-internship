import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: [],
};

export const itemSlice = createSlice({
  name: "newItems",
  initialState,
  reducers: {
    setNewItems: (state, action) => {
      state.item = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setNewItems } = itemSlice.actions;

export default itemSlice.reducer;
