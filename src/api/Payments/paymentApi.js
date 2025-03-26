import { commonrequest } from "../Commonrequest";
import { BASE_URL } from "../helper";


export const PlaceOrderapi = async(data , header)=>{
    return await commonrequest('POST',`${BASE_URL}/checkout/api/payment`,data,header , "");
}


