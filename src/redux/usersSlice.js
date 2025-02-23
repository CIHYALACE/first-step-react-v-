import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addToCart, GetAllUsers, GetUserData } from "../api/userApi";

const initialState = {
    users: [],
    errors: null,
    cartData: [],
  };

  export const getAllUsersAction = createAsyncThunk(
    "user/getAllUsersAction",
    async (args , thunkAPI) => {
      const {rejectWithValue} = thunkAPI;
     try{
      let response = await GetAllUsers();
      return response.data;
     }catch(error){
      return rejectWithValue(error.message)
     }
    }
  )

  export const getUserDataAction = createAsyncThunk(
    "user/getUserDataAction",
    async (userId , thunkAPI) => {
      const {rejectWithValue} = thunkAPI;
    try{
      const response = await GetUserData(userId)
      return response.data;
      
    }catch (error){
      return rejectWithValue(error.message)
    }
    }
  )

  export const addToCartAction = createAsyncThunk(
    "user/addToCartAction",
      async  ({userId , productId , quantity = 1} , thunkAPI) =>{
        const { rejectWithValue , getState} = thunkAPI;
        try {
          let userResponse = await GetUserData(userId);
          let user = userResponse.data;
          const state = getState();
          const product = state.productsSlice.products.find(p => p.id === productId);          
    
        let updatedCart = user.cart.map(item => {
          if (item.id === productId) {
            return { ...item, quantity: item.quantity + quantity };
          }
          return item;
        });
        if (!updatedCart.some(item => item.id === productId)) {
          updatedCart = [...updatedCart, { ...product, quantity }];
        }
          let response = await addToCart(userId, updatedCart);
          console.log(response.data);
          return response.data;
        } catch (error) {
          return rejectWithValue(error.message);
        }
    }
  )

  export const removeFromCartAction = createAsyncThunk(
    "user/removeFromCartAction",
    async ({ userId, productId }, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        let userResponse = await GetUserData(userId);
        let user = userResponse.data;
  
        let updatedCart = user.cart.filter(item => item.id !== productId);
  
        let response = await removeFromCart(userId, updatedCart);
        console.log(response.data);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  const usersSlice = createSlice({
    name: "user",
    initialState,
    reducers:{},
    extraReducers:( builder ) =>
      {
          builder.addCase( getAllUsersAction.fulfilled ,(state , action) => {
            state.users = action.payload;
          });
          builder.addCase( getAllUsersAction.rejected ,(state , action) => {
            state.errors = action.payload;
          });
          builder.addCase(getUserDataAction.fulfilled, (state, action) => {
            const user = action.payload;
            state.users[user.id] = user;
            state.cartData = user.cart;
          });
          builder.addCase(getUserDataAction.rejected, (state, action) => {
            state.errors = action.payload;
          });
          builder.addCase(addToCartAction.fulfilled, (state, action)=>{
            let product = action.payload
            state.cartData = [...state.cartData,product]
          });
          builder.addCase(addToCartAction.rejected, (state, action)=>{
            state.errors = action.payload;
          });
          builder.addCase(removeFromCartAction.fulfilled, (state, action) => {
            state.cartData = action.payload.cart;
          });
          builder.addCase(removeFromCartAction.rejected, (state, action) => {
            state.errors = action.payload;
          });
    }
  });

  export const usersReducer = usersSlice.reducer;
 
