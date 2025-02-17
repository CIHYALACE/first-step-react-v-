import { createSlice } from "@reduxjs/toolkit";

const initialState = [{id: 1 ,name: "pen", price: 12 , catigory: "tools"},{id: 2 ,name: "book", price: 12 , catigory: "tools"}];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});


export const productsReducer = productsSlice.reducer;