import { BASE_URL } from "../helper";
import { commonrequest } from "../Commonrequest";

// Add product to cart and also use in cart to increase quantity 
export const addtoCart = async(data , header)=>{
    return await commonrequest('POST' , `${BASE_URL}/carts/api/addtocart/${data.id}`,{} , header , '')
}

// get product data 
export const CallgetCartdata = async( header)=>{
    return await commonrequest('GET' , `${BASE_URL}/carts/api/getcarts`,{} , header , '')
}

// decrement single product from cart
export const removeSingleproduct = async(data ,header)=>{
    return await commonrequest('DELETE' , `${BASE_URL}/carts/api/removesingleiteam/${data.id}`,{} , header , '')
}

// Remove item from cart
export const removeItem = async(data ,header)=>{
    return await commonrequest('DELETE' , `${BASE_URL}/carts/api/removeiteams/${data.id}`,{} , header , '')
}