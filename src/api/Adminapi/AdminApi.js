import {BASE_URL} from '../helper'
import {commonrequest} from '../Commonrequest'

//Admin Register api 
export const AdminRegisterapi = async (data,header) => {
    return await commonrequest('POST' , `${BASE_URL}/adminauth/api/register`,data , header , 'admin')
}

//  Admin login api
export const AdminLoginapi = async (data,header) => {
    return await commonrequest('POST' , `${BASE_URL}/adminauth/api/login`,data , header , 'admin')
}

//  admin verify api
export const AdminVerify = async (header) => {
    return await commonrequest('GET' , `${BASE_URL}/adminauth/api/adminverify`,"", header , 'admin')
}

// Admin logout api 
export const Adminlogout = async (header) =>{
    return await commonrequest('GET' , `${BASE_URL}/adminauth/api/logout`,"", header , 'admin')
}