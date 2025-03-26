import { commonrequest } from "../Commonrequest";
import { BASE_URL } from "../helper";

export const userRegister = async(data , header)=>{
     return await commonrequest('POST',`${BASE_URL}/userauth/api/register`,data,header , "");
}

export const userLogin = async(data , header)=>{
     return await commonrequest('POST',`${BASE_URL}/userauth/api/login`,data , header , "");
}

export const userVerify = async(header)=>{
      return await commonrequest('GET',`${BASE_URL}/userauth/api/userloggedin`,null , header , "") 
}

export const userLogout = async(header)=>{
     return await commonrequest('GET',`${BASE_URL}/userauth/api/logout`,null , header , "") 
}

export const ForgotpasswordResetlink = async(data,header)=>{
     return await commonrequest('POST' , `${BASE_URL}/userauth/api/forgotpassword` , data , header , "")
}

export const ForgotpasswordVerify = async(data,header)=>{
     return await commonrequest('GET' , `${BASE_URL}/userauth/api/forgotpassword/${data.id}/${data.token}` , null , header , "")
}

export const ResetpasswordVerify = async(data,header)=>{
     return await commonrequest('PUT' , `${BASE_URL}/userauth/api/resetpassword/${data.id}/${data.token}` , data , header , "")
}

//  getAll user by  admin
export const getAlluser = async(data,header)=>{
     return await commonrequest('GET' , `${BASE_URL}/userauth/api/getAlluser?page=${data.page}` , null , header , "admin")
}

// Delete user by admin
export const deleteuserapi = async(data,header)=>{
     return await commonrequest('DELETE' , `${BASE_URL}/userauth/api/userdelete/${data.userid}` , {} , header , "admin")
}

// Contact by user
export const contactUser = async(data,header)=>{
     return await commonrequest('POST' , `${BASE_URL}/userauth/api/usercontact` , data , header , "")
}