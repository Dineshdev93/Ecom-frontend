import { BASE_URL } from "../helper";
import { commonrequest } from "../Commonrequest";

// for add category by admin
export const addcategory = async(data , header)=>{
    return await commonrequest('POST' , `${BASE_URL}/product/api/addcategory`,data , header , 'admin')
}

// for get category on addproduct component
export const getcategorydata = async (header) => {
    return await commonrequest('GET' ,`${BASE_URL}/product/api/getcategory`, "" , header , 'admin')
}

//  for post data (add product)
export const addProduct = async (data ,categoryid , header) => {
    return await commonrequest('POST' ,`${BASE_URL}/product/api/addProducts?categoryid=${categoryid}`, data , header , 'admin')
}

//  get all products
export const getallproducts = async(data , header )=>{
      return await commonrequest('GET', `${BASE_URL}/product/api/getProducts?page=${data.page}`,null,header , 'admin' )
}

// getSingle products
export const getSingleproduct = async(data , header )=>{
    return await commonrequest('GET', `${BASE_URL}/product/api/getsingleProduct/${data}`,"",header , 'admin' )
}

// Get latest products
export const getNewarrivalproducts = async( header )=>{
    return await commonrequest('GET', `${BASE_URL}/product/api/getLatestProducts`,"",header , 'admin' )
}

// delete product
export const deleteproduct = async(productid,header)=>{
    return await commonrequest('DELETE', `${BASE_URL}/product/api/products/${productid}`,{},header , 'admin' )
}

// review apis 


// Add review api 
export const Addreview = async(data,header)=>{
    return await commonrequest('POST', `${BASE_URL}/product/api/productreview/${data.productid}`,data,header , '' )
}

// get product review by their id
export const GetReview = async(data,header)=>{
    return await commonrequest('GET', `${BASE_URL}/product/api/getProductreview/${data.productid}`,"",header , '' )
}

// Delete product review by their id
export const DeleteReview = async(data,header)=>{
    return await commonrequest('DELETE', `${BASE_URL}/product/api/productreviewdelete/${data.reviewid}`,{},header , '' )
}

export const Allproducts = async( header )=>{
    return await commonrequest('GET', `${BASE_URL}/product/api/getAllProductswithoutPagination`,"",header , '' )
}
