import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AdminLoginapi, Adminlogout, AdminVerify } from "../../../api/Adminapi/AdminApi";
import { toast } from "react-toastify";

// createAsyncThunk is use for api call in redux toolkit , it is function

//  api call and get response here 
// admin login slice
export const AdminAuthlogin = createAsyncThunk("adminlogin", async (data) => {
  try {
    const response = await AdminLoginapi(data);
    if (response.status === 200) {
      toast.success("login successfully done !"); 
      return response.data;
    } else {
      toast.error(response.response.data.error);
    }
  } catch (error) {
    throw error;
  }
});

// admin loggedin (verify) slice
export const Adminloggedin = createAsyncThunk(
  "adminverify",
  async (_, thunkApi) => {
    try {
      const response = await AdminVerify();
      if (response.status === 200) {
        // alert("call")
        return response.data;
      } else {
        localStorage.removeItem('admin-token') ; 
        return thunkApi.rejectWithValue("Verification failed");
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error.message || "Something went wrong");
    }
  }
);


  //  admin logout slice
  export const Handleadminlogout = createAsyncThunk(
    "adminlogout",
    async(thunkApi) =>{
      try {
        const response = await Adminlogout();
        
        if(response.status == 200){
            toast.success("Admin Logout Done")
            localStorage.removeItem("admin-token")
            console.log('logout',response.data);
            
            return response.data
        }else{
            toast.success("Admin Logout Done")
            localStorage.removeItem("admin-token")
            return thunkApi.rejectWithValue("error");
        }
    } catch (error) {
        throw error;
    }

    }  
  )

//  create slices for admin  apis
export const Admin_Slice = createSlice({
  name: " AdminSlice",
  initialState: {
    adminpayload: [],
    adminloggeddata: [],
    adminlogoutdata : [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
    // add case for admin login
      .addCase(AdminAuthlogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(AdminAuthlogin.fulfilled, (state, action) => {
        state.loading = false;
        state.adminpayload = action.payload;
      })
      .addCase(AdminAuthlogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // add case for admin veryfy
      .addCase(Adminloggedin.pending, (state) => {
        state.loading = true;
      })
      .addCase(Adminloggedin.fulfilled, (state, action) => {
        state.loading = false;
        state.adminloggeddata = [action.payload];
      })
      .addCase(Adminloggedin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // admin logout api 
      .addCase(Handleadminlogout.pending, (state) => {
        state.loading = true;
      })
      .addCase(Handleadminlogout.fulfilled, (state, action) => {
        state.loading = false;
        state.adminlogoutdata = [action.payload]
      })
      .addCase(Handleadminlogout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }); 
  },
});

export default Admin_Slice.reducer;
 