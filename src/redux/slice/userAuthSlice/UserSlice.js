import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  contactUser,
  deleteuserapi,
  ForgotpasswordResetlink,
  ForgotpasswordVerify,
  getAlluser,
  RemoveCartdata,
  ResetpasswordVerify,
  userLogin,
  userLogout,
  userRegister,
  userVerify,
} from "../../../api/Userauthapi/userauthapi";
import { toast } from "react-toastify";

export const Registeruser = createAsyncThunk(
  "register-user",
  async (data, thunkApi) => {
    try {
      const response = await userRegister(data.formdata, data.headers);
      if (response.status === 200) {
        toast.success("User Register Successfully");
        return response.data;
      } else {
        toast.error("User Register alreday");
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const Loginuser = createAsyncThunk(
  "login_user",
  async (data, thunkApi) => {
    try {
      const response = await userLogin(data);
      if (response.status === 200) {
        localStorage.setItem("user-token", response.data.token);
        
        toast.success("User Login Successfully");
        
        return response.data;
      } else {
        return thunkApi.rejectWithValue();
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }      
  }
);

// user verify Slice
export const Userverifyed = createAsyncThunk(
  "verify_user",
  async (thunkApi) => {
    try {
      const response = await userVerify();
      if (response.status === 200) {
        console.log("user-verified" ,response.data);
        return response.data;
      } else {
        return thunkApi.rejectWithValue();
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const Userlogout = createAsyncThunk("user-logout", async () => {
  try {
    const response = await userLogout();
    if (response.status === 200) {
      toast.success("User Logout Successfully");
    }
  } catch (error) {
    toast.error("Failed");
  }
});
// forgot password link generate
export const SendPasswordlink = createAsyncThunk("Send-link", async (data) => {
  try {
        const response = await ForgotpasswordResetlink(data);
            if(response.data === undefined){
               toast.error("This user is not exist !") 
               console.log("sdfskhdfkjhsdf",response.data);
        
            }else{
              console.log("response",response.data);
              toast("Email sent successfullly !")
            }
        } catch (error) {
            console.log("errr");
            // toast.error("This user is not exist !")
            // console.log("hello",response.data);
            throw error
        }
   });

// forgot password verify slice
export const forgotpassVerfy = createAsyncThunk("forgot-password-verify", async (data) => {
  try {
        const response = await ForgotpasswordVerify(data)
        if(response.data.message){
          //  console.log("verify", response.data);
           return response.data ; 
        }else{
          toast.error("else Link expired") 
          return response.data
        } 
        } catch (error) {
            toast.error("Link expired")
            throw error
        }
});

export const Resetpass = createAsyncThunk("Reset-password", async (data) => {
  try {
        const response = await ResetpasswordVerify(data)
           toast("Password successfully updated !")
           return response.data; 
        } catch (error) {
            toast.error("wrong ........")
            throw error
        }
});

// on admin dashboard
export const GetAllUser = createAsyncThunk("get-all-user", async (data) => {
  try {
        const response = await getAlluser(data)
           return response.data; 
        } catch (error) {
            console.log("error",error);
            throw error
        }
});

  //  on admin dashboard delete user
  export const DeleteUSer = createAsyncThunk("deleteuser", async (data) => {
    try {
          const response = await deleteuserapi(data)
             console.log("response" , response.data);
             
             return response.data; 
          } catch (error) {
              console.log("error",error);
              throw error
          }
  });  

export const userContact = createAsyncThunk("user-contact", async (data) => {
  try {
        const response = await contactUser(data)
           return response.data; 
        } catch (error) {
            console.log("error",error);
            throw error
        }
});

// Remove cartdata
export const Removecartdata = createAsyncThunk("removecartdata", async () => {
  try {
        const response = await RemoveCartdata()
           console.log("misssion successful" , response.data);
           
           return response.data; 
        } catch (error) {
            console.log("error",error);
            throw error
        }
});



const UserAuthSlice = createSlice({
  name: "userSlice",
  initialState: {
    userRegister: [],
    Loginuserdata: [],
    LoggeduserData: [],
    LogOutUser: [],
    Forgotpassword : [],
    Forgotpasswordverifystate : [],
    Resetpassword : [] ,
    userData : [] , 
    Contacttouser : [] ,
    delUserState : [] , 
    removecartdata : [] ,
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(Registeruser.pending, (state) => {
        state.loading = true;
      })
      .addCase(Registeruser.fulfilled, (state, action) => {
        state.loading = false;
        state.userRegister = [action.payload];
      })
      .addCase(Registeruser.rejected, (state) => {
        state.loading = false;
      })

      // user login cases
      .addCase(Loginuser.pending, (state) => {
        state.loading = true;
      })
      .addCase(Loginuser.fulfilled, (state, action) => {
        state.loading = false;
        state.Loginuserdata = [action.payload];
      })
      .addCase(Loginuser.rejected, (state) => {
        state.loading = false;
      })

      // user verify cases
      .addCase(Userverifyed.pending, (state) => {
        state.loading = true;
      })
      .addCase(Userverifyed.fulfilled, (state, action) => {
        state.loading = false;
        state.LoggeduserData = [action.payload];
      })
      .addCase(Userverifyed.rejected, (state) => {
        state.loading = false;
      })

      // user logout cases
      .addCase(Userlogout.pending, (state) => {
        state.pending = true;
      })
      .addCase(Userlogout.fulfilled, (state, action) => {
        state.pending = false;
        state.LogOutUser = [action.payload];
        state.LoggeduserData = [];
      })
      .addCase(Userlogout.rejected, (state) => {
        state.loading = false;
      })

      // Forgot Password link
      .addCase(SendPasswordlink.pending ,  (state)=>{
           state.loading = true ;
      })
      .addCase(SendPasswordlink.fulfilled , (state , action)=>{
          state.loading = false 
          state.Forgotpassword = action.payload
      })
      .addCase(SendPasswordlink.rejected , (state)=>{
          state.loading = false
      })

      // Forgot Password verify cases
      .addCase(forgotpassVerfy.pending ,  (state)=>{
        state.loading = true ;
      })
      .addCase(forgotpassVerfy.fulfilled , (state , action)=>{
       state.loading = false 
       state.Forgotpasswordverifystate = action.payload
      })
       .addCase(forgotpassVerfy.rejected , (state)=>{
       state.loading = false
      })

      // Reset password cases
      .addCase(Resetpass.pending ,  (state)=>{
        state.loading = true ;
      })
      .addCase(Resetpass.fulfilled , (state , action)=>{
       state.loading = false 
       state.Resetpassword = [action.payload]
      })
       .addCase(Resetpass.rejected , (state)=>{
       state.loading = false
      })
      
      // Get all user for admin
      .addCase(GetAllUser.pending ,  (state)=>{
        state.loading = true ;
      })
      .addCase(GetAllUser.fulfilled , (state , action)=>{
       state.loading = false 
       state.userData = [action.payload]
      })
       .addCase(GetAllUser.rejected , (state)=>{
       state.loading = false
      })

      // Delete user by admin
      .addCase(DeleteUSer.pending ,  (state)=>{
        state.loading = true ;
      })
      .addCase(DeleteUSer.fulfilled , (state , action)=>{
       state.loading = false 
       state.delUserState = action.payload
      })
       .addCase(DeleteUSer.rejected , (state)=>{
       state.loading = false
      })


      // contact by user 
      .addCase(userContact.pending ,  (state)=>{
        state.loading = true ;
      })
      .addCase(userContact.fulfilled , (state , action)=>{
       state.loading = false 
       state.Contacttouser = [action.payload]
      })
       .addCase(userContact.rejected , (state)=>{
       state.loading = false
      })

      // removecartdata
      .addCase(Removecartdata.pending ,  (state)=>{
        state.loading = true ;
      })
      .addCase(Removecartdata.fulfilled , (state , action)=>{
       state.loading = false 
       state.removecartdata = action.payload
      })
       .addCase(Removecartdata.rejected , (state)=>{
       state.loading = false
      })


  },
});

export default UserAuthSlice.reducer;
