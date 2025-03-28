import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetOrdersapi, Orderapi } from "../../../api/orderApi/orderapi";
import { toast } from "react-toastify";

//  Add orders
export const Order = createAsyncThunk("Order", async (data) => {
  try {
    const response = await Orderapi(data);
    if (response.status === 200) {
      toast.success("Payment Successfully Done");
      console.log("Details", response.data);
      return response.data;
    } else {
      toast.error(response.response.data.error);
    }
  } catch (error) {
    console.log("Error", error);
  }
});


// Get orders
export const GetOrderSlice = createAsyncThunk("GetOrderSlice", async () => {
  try {
    const response = await GetOrdersapi();
    if (response.status === 200) {
      console.log("get Details", response.data);
      return response.data;
    } else {
       console.log("error");
    }
  } catch (error) {
    console.log("Error", error);
  }
});

const OrderSlice = createSlice({
    name: "OrderSlice",
    initialState: {
      Orderdetails : [],
      OrdersState : [] , 
      loading: false,
    },
    extraReducers: (builder) => {
      builder
    
        // Place order
        .addCase(Order.pending ,  (state)=>{
          state.loading = true ;
        })
        .addCase(Order.fulfilled , (state , action)=>{
         state.loading = false 
         state.Orderdetails = action.payload
        })
         .addCase(Order.rejected , (state)=>{
         state.loading = false
        })
  
        .addCase(GetOrderSlice.pending ,  (state)=>{
          state.loading = true ;
        })
        .addCase(GetOrderSlice.fulfilled , (state , action)=>{
         state.loading = false 
         state.OrdersState = action.payload
        })
         .addCase(GetOrderSlice.rejected , (state)=>{
         state.loading = false
        })
  
  
    },
  });
  
  export default OrderSlice.reducer;
