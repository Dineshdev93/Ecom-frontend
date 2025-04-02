import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AdminOrdersApi, ChangeOrderStatus, GetOrdersapi, Orderapi } from "../../../api/orderApi/orderapi";
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
    console.log(response.data);
    
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

// Get orders for admin
export const  adminOrderapi = createAsyncThunk("AdminOrdersApi", async () => {
  try {
    const response = await AdminOrdersApi();
    
    
    if (response.status === 200) {
      return response.data;
    } else {
       console.log("error");
    }
  } catch (error) {
    console.log("Error", error);
  }
});

// Get orders by admin
export const  OrderStatusSlice = createAsyncThunk("OrderStatusSlice", async (data) => {
  try {
    const response = await ChangeOrderStatus(data);
    if (response.status === 200) {
      toast.success("Status changed")
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
      adminOrderState : [],
      OrderStatuschange : [], 
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
  
        // get orders for admin
        .addCase(adminOrderapi.pending ,  (state)=>{
          state.loading = true ;
        })
        .addCase(adminOrderapi.fulfilled , (state , action)=>{
         state.loading = false 
         state.adminOrderState = action.payload
        })
         .addCase(adminOrderapi.rejected , (state)=>{
         state.loading = false
        })

         // change order status by admin
         .addCase(OrderStatusSlice.pending ,  (state)=>{
          state.loading = true ;
        })
        .addCase(OrderStatusSlice.fulfilled , (state , action)=>{
         state.loading = false 
         state.OrderStatuschange = action.payload
        })
         .addCase(OrderStatusSlice.rejected , (state)=>{
         state.loading = false
        })
           
    },
  });
  
  export default OrderSlice.reducer;
