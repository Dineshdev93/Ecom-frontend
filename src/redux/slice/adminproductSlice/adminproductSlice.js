import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addcategory,
  addProduct,
  Addreview,
  Allproducts,
  deleteproduct,
  DeleteReview,
  getallproducts,
  getcategorydata,
  getNewarrivalproducts,
  getproductbyname,
  GetReview,
  getSingleproduct
} from "../../../api/Productapi/Productapi";
import { toast } from "react-toastify";

// create category slice
export const addCategorybyadmin = createAsyncThunk(
  "addcategory",
  async (data) => {
    try {
      const response = await addcategory(data);
      if (response.status === 200) {
        toast.success("product added successfully !");
        console.log("response", response);

        return response.data;
      } else {
        toast.error("something wrong !");
      }
    } catch (error) {
      throw error;
    }
  }
);

// slice of add category
export const categorydata = createAsyncThunk("Product-category", async () => {
  try {
    const response = await getcategorydata();
    if (response.status === 200) {
      // console.log('response' , response.data);
      return response.data;
    } else {
      toast.error("something wrong !");
    }
  } catch (error) {
    throw error;
  }
});

// slice of add product
export const addProductbyadmin = createAsyncThunk(
  "add-product",
  async (data) => {
    try {
      const response = await addProduct(
        data.formdata,
        data.categoryid,
        data.config
      );
      if (response.status === 200) {
        // console.log("helo product" + response.data);
        toast.success("Product has been added !");
        return response.data;
      } else {
        toast.error(response.response.data.error);
      }
    } catch (error) {
      toast.error("Product not added !");
    }
  }
);

//  Slice for getall products
export const getAddedproducts = createAsyncThunk("get-products", async (data) => {
  try {
    const response = await getallproducts(data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const Newarrivalproducts = createAsyncThunk("new-arrival-products", async () => {
  try {
    const response = await getNewarrivalproducts();
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

//  Slice for getall products
export const deltedProduct = createAsyncThunk("delete-product", async (productid) => {
  try {
    const response = await deleteproduct(productid);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

// slice for get single product
export const GetSingleproduct = createAsyncThunk("get-single-products", async (data) => {
  try {
    const response = await getSingleproduct(data);
    return response.data;
  } catch (error) {
    return console.log(error);
  }
});


// Review ki apis ki slice
export const Add_review_Slice = createAsyncThunk("Addreview-by-user", async (data) => {
  try {
    const response = await Addreview(data);
    // console.log("Review data",response.data);
    return response.data;
  } catch (error) {
    return console.log(error);
  }
});

export const Getting_Review = createAsyncThunk("Get-review-by-user", async (data) => {
  try {
    const response = await GetReview(data);
    // console.log("Review data",response.data);
    return response.data;
  } catch (error) {
    return console.log(error);
  }
});

// Delete review based on review id
export const Delete_Review = createAsyncThunk("Delete-review-by-user", async (data) => {
  try {
    const response = await  DeleteReview(data);
    console.log("Deleting Review with ID:", data.reviewid)
    return response.data;        
  } catch (error) {
    return console.log(error);
  }
});

// get all products without pagination
export const Getting_All_Products = createAsyncThunk("Getting_All_Products", async () => {
  try {
    const response = await Allproducts();
    // console.log("Review data",response.data);
    return response.data;
  } catch (error) {
    return console.log(error);
  }
});

   export const Searchproduct = createAsyncThunk("Search_Product" , async(data)=>{
        try {
            const response = await getproductbyname(data)
            return response.data
        } catch (error) {
            console.log("Something went wrong");
        }
   })

const adminproductsSlice = createSlice({
  name: "amdinproducts",
  initialState: {
    addcategory: [],
    category_data: [],
    addproducts: [],
    getProductsbyadmin: [],
    DeletedProducts : [],
    Statenewarrivalproducts : [],
    SingleproductState : [] ,
    ReviewData : [] ,
    getReview_state : [],
    DeletedReview : [],
    GetAllProducts : [],
    Getsearchproduct : [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    // add cases for add category
    builder
      .addCase(addCategorybyadmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(addCategorybyadmin.fulfilled, (state, action) => {
        state.loading = false;
        state.addcategory = [action.payload];
      })
      .addCase(addCategorybyadmin.rejected, (state) => {
        state.loading = false;
      })

      // add cases for get category data
      .addCase(categorydata.pending, (state) => {
        state.loading = true;
      })
      .addCase(categorydata.fulfilled, (state, action) => {
        state.category_data = action.payload;
        state.loading = false;
      })
      .addCase(categorydata.rejected, (state) => {
        state.loading = false;
      })
      // add cases for add product by admin
      .addCase(addProductbyadmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(addProductbyadmin.fulfilled, (state, action) => {
        state.addproducts = action.payload;
        state.loading = false;
      })
      .addCase(addProductbyadmin.rejected, (state) => {
        state.loading = false;
      })

      //  get all products by added admin
      .addCase(getAddedproducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAddedproducts.fulfilled, (state, action) => {
        state.loading = false;
        state.getProductsbyadmin = [action.payload];
      })
      .addCase(getAddedproducts.rejected, (state) => {
        state.loading = false;
      })

      //  get latest products at home page
      .addCase(Newarrivalproducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(Newarrivalproducts.fulfilled, (state, action) => {
        state.loading = false;
        state.Statenewarrivalproducts = action.payload;
      })
      .addCase(Newarrivalproducts.rejected, (state) => {
        state.loading = false;
      })

      // delete product 
      .addCase(deltedProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(deltedProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.DeletedProducts = action.payload;
      })
      .addCase(deltedProduct.rejected, (state) => {
        state.loading = false;
      })

      // get single product
      .addCase(GetSingleproduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(GetSingleproduct.fulfilled, (state, action) => {
        state.loading = false;
        state.SingleproductState = [action.payload];
      })
      .addCase(GetSingleproduct.rejected, (state) => {
        state.loading = false;
      })


      // Add review by their  product
      .addCase(Add_review_Slice.pending, (state) => {
        state.loading = true;
      })
      .addCase(Add_review_Slice.fulfilled, (state, action) => {
        state.loading = false;
        state.SingleproductState = [action.payload];
      })
      .addCase(Add_review_Slice.rejected, (state) => {
        state.loading = false;
      })

      // Get review by their  product
      .addCase(Getting_Review.pending, (state) => {
        state.loading = true;
      })
      .addCase(Getting_Review.fulfilled, (state, action) => {
        state.loading = false;
        state.getReview_state = action.payload;
      })
      .addCase(Getting_Review.rejected, (state) => {
        state.loading = false;
      })

      // Get review by their  product
      .addCase(Delete_Review.pending, (state) => {
        state.loading = true;
      })
      .addCase(Delete_Review.fulfilled, (state, action) => {
        state.loading = false;
        state.DeletedReview = action.payload;
      })
      .addCase(Delete_Review.rejected, (state) => {
        state.loading = false;
      })
      // Get review by their  product
      .addCase(Getting_All_Products.pending, (state) => {
        state.loading = true;
      })
      .addCase(Getting_All_Products.fulfilled, (state, action) => {
        state.loading = false;
        state.GetAllProducts = action.payload;
      })
      .addCase(Getting_All_Products.rejected, (state) => {
        state.loading = false;
      })

      // Get product by their  product name
      .addCase(Searchproduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(Searchproduct.fulfilled, (state, action) => {
        state.loading = false;
        state.Getsearchproduct = action.payload;
      })
      .addCase(Searchproduct.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default adminproductsSlice.reducer;
