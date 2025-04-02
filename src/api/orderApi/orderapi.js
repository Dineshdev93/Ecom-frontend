import { BASE_URL } from "../helper";
import { commonrequest } from "../Commonrequest";

// Add orders api 
export const Orderapi = async(data , header)=>{
    return await commonrequest('POST',`${BASE_URL}/order/api/addorders`, data , header , "");
}


// get orders api 
export const GetOrdersapi = async(header)=>{
    return await commonrequest('GET',`${BASE_URL}/order/api/getuserorders`, "" , header , "");
}

// Get orders for admin
export const AdminOrdersApi = async(header)=>{
    return await commonrequest('GET',`${BASE_URL}/order/api/orders`, "" , header , "admin");
}

// Change order status
export const ChangeOrderStatus = async( data ,  header)=>{
    return await commonrequest('PUT',`${BASE_URL}/order/api/orders/${data.orderid}`, data , header , "admin");
}