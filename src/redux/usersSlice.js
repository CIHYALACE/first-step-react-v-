import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetAllUsers, GetUserData } from "../api/userApi";

const initialState = {
    users: [],
    errors: null,
  };

  export const getAllUsersAction = createAsyncThunk(
    "user/getAllUsersAction",
    async (args , thunkAPI) => {
      const {rejectWithValue} = thunkAPI;
     try{
      let response = await GetAllUsers();
      return response.data;
     }catch(error){
      return rejectWithValue(error)
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
      rejectWithValue(error)
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
    }
  });

  export const usersReducer = usersSlice.reducer;
 
