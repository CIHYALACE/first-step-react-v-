import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addToCart, GetAllUsers, GetUserData } from "../api/userApi";

const initialState = {
    users: [],
    errors: null,
    cartData: []
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
      let response = await GetUserData(userId)
      console.log(response.data)
      return response.data
      
    }catch (error){
      return rejectWithValue(error.message)
    }
    }
  )

  export const addToCartAction = createAsyncThunk(
    "user/addToCartAction",
      async  ({userId , cartData } , thunkAPI) =>{
        const {rejectWithValue} = thunkAPI;
        try {
          let response = await addToCart(userId , cartData)
          console.log(response.data)
          return response.data
        } catch (error) {
          return rejectWithValue(error.message)
        }
    }
  )

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
            state.users = action.payload;
          });
          builder.addCase(getUserDataAction.rejected, (state, action) => {
            state.errors = action.payload;
          });
          builder.addCase(addToCartAction.fulfilled, (state, action)=>{
            let product = action.payload
            state.cartData = [...state.cartData,product]
          })
          builder.addCase(addToCartAction.rejected, (state, action)=>{
            state.errors = action.payload;
          })
    }
  });

  export const usersReducer = usersSlice.reducer;
 
