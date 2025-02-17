import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./productsSlice";

export const myStore = configureStore({
    reducer:{
        productsSlice: productsReducer
    },
});