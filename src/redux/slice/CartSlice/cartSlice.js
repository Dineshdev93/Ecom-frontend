import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addtoCart, CallgetCartdata, removeItem, removeSingleproduct } from "../../../api/CartApi/cartApi";
import { toast } from "react-toastify";

export const AddtoCart = createAsyncThunk(
  "Post-cart-data",
  async (data, thunkApi) => {
    try {
      const response = await addtoCart(data);
      if (response.status === 200) { 
        toast.success(response.data.message);
        return response.data;
      } else {
        toast.error("Please Login !");
        console.log("error",response.data);
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  })

  export const Get_Cart_Data = createAsyncThunk(
    "get-cart-data" , 
    async(thunkApi) =>{
         try {
              const response = await CallgetCartdata()
              if(response.status === 200){
                  return response.data              
              }
              
            } catch (error) {
              return thunkApi.rejectWithValue("error")
         }
    }
  )

  //  decrement product from cart
  export const Delete_Single_Product = createAsyncThunk(
    "Delete-single-cart-product" , 
    async(data , thunkApi) =>{
         try {
              const response = await removeSingleproduct(data)
              if(response.status === 200){
                toast(response.data.message)
                  return response.data              
              }
            } catch (error) {
              return thunkApi.rejectWithValue(error)
         }
    }
  )

  //  Remove item from cart
  export const RemoveItem = createAsyncThunk(
    "RemoveItem-from-cart" , 
    async(data , thunkApi) =>{
         try {
              const response = await removeItem(data)
              if(response.status === 200){
                toast(response.data.message)
                  return response.data              
              }
            } catch (error) {
              return thunkApi.rejectWithValue(error)
         }
    }
  )

  
  const Cart_Slice = createSlice({
    name : "Cart-slice",
    initialState : {
        cart_data_post : [],
        get_cart_data : [] ,
        deleteSingleproduct : [],
        Removeitem : []
    }, 
    extraReducers : (builder) =>{
         builder
               .addCase(AddtoCart.pending, (state) => {
                 state.loading = true;
               })
               .addCase(AddtoCart.fulfilled, (state, action) => {
                 state.loading = false;
                 state.cart_data_post = action.payload;
               })
               .addCase(AddtoCart.rejected, (state) => {
                 state.loading = false;
               })
 
            //    get cart data slice cases
               .addCase(Get_Cart_Data.pending, (state) => {
                state.loading = true;
              })
              .addCase(Get_Cart_Data.fulfilled, (state, action) => {
                state.loading = false;
                state.get_cart_data = action.payload;
              })
              .addCase(Get_Cart_Data.rejected, (state) => {
                state.loading = false;
              })

              // delete single product
              .addCase(Delete_Single_Product.pending, (state) => {
                state.loading = true;
              })
              .addCase(Delete_Single_Product.fulfilled, (state, action) => {
                state.loading = false;
                state.deleteSingleproduct = action.payload;
              })
              .addCase(Delete_Single_Product.rejected, (state) => {
                state.loading = false;
              })

              // Remove item
              .addCase(RemoveItem.pending, (state) => {
                state.loading = true;
              })
              .addCase(RemoveItem.fulfilled, (state, action) => {
                state.loading = false;
                state.Removeitem = action.payload;
              })
              .addCase(RemoveItem.rejected, (state) => {
                state.loading = false;
              })
    }
  })

  export default Cart_Slice.reducer