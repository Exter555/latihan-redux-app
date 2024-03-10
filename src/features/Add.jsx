import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
};
const addSlice = createSlice({
  name: "add",
  initialState,
  reducers: {
    addData: (state, action) => {
      const newData = action.payload;
      state.cart = [newData, ...state.cart];
    },
  },
});

export const { addData } = addSlice.actions;
export default addSlice.reducer;
