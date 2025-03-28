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