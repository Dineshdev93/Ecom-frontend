import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PlaceOrderapi } from "../../../api/Payments/paymentApi";

export const PlaceOrderSlice = createAsyncThunk(
  "payments",
  async (data, thunkApi) => {
    try {
      const response = await PlaceOrderapi(data);
      if (response.status === 200) {
        
        return response.data;
      } else {
       
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);


const PaymentsSlice = createSlice({
    name: "paymentSlice",
    initialState: {
      placeOrderState : [],
      loading: false,
    },
    extraReducers: (builder) => {
      builder
    
        // Place order
        .addCase(PlaceOrderSlice.pending ,  (state)=>{
          state.loading = true ;
        })
        .addCase(PlaceOrderSlice.fulfilled , (state , action)=>{
         state.loading = false 
         state.placeOrderState = [action.payload]
        })
         .addCase(PlaceOrderSlice.rejected , (state)=>{
         state.loading = false
        })
  
  
    },
  });
  
  export default PaymentsSlice.reducer;