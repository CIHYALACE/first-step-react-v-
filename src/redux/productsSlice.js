import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteProduct, GetAllProducts } from "../api/productApi";

const initialState = {
  products: [],
  isLoading: true,
  errors: null,
};

export const getAllProductsAction = createAsyncThunk(
  "products/getAllProductAction",
  async (args , thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
   try{
    let response = await GetAllProducts();
    return response.data;
   }catch(error){
    return rejectWithValue(error)
   }
  }
);

export const deleteProductAction = createAsyncThunk(
  "products/deleteProductAction",
  async (productId , {rejectWithValue}) =>{
    try{
      await deleteProduct(productId);
      return productId;
    }catch (error){
    return rejectWithValue(error)
    }

  }
)

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers:( builder )=>{
    builder.addCase( getAllProductsAction.pending ,(state , action) => {
      state.isLoading = true;
    })
    builder.addCase( getAllProductsAction.fulfilled ,(state , action) => {
      state.isLoading = false;
      state.products = action.payload;
    })
    builder.addCase( getAllProductsAction.rejected ,(state , action) => {
      state.isLoading = false;
      state.errors = action.payload
    })
    builder.addCase ( deleteProductAction.fulfilled ,(state , action) =>{
      state.products = state.products.filter( (product)=> product.id != action.payload )
    }) 
  }
});

export const productsReducer = productsSlice.reducer;
