import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./productsSlice";
import { usersReducer } from "./usersSlice"

export const myStore = configureStore({
    reducer:{
        productsSlice: productsReducer,
        usersSlice : usersReducer
    },
});