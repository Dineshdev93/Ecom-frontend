import React from "react";
import { useState, useEffect } from "react";
import Select from "react-select";
import Spiner from "../Loader/Spiner";
import {
  addProductbyadmin,
  categorydata,
} from "../../redux/slice/adminproductSlice/adminproductSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
export default function Adminaddproduct() {
  // get category data p[rocess]
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categorydata());
  }, []);

  const category_data = useSelector((state) => state.products.category_data);
  // console.log("API Response:", category_data);
  




  // states for consumeing form data
  const [categoryState ,setCategorystate] = useState([])
  const [categoryid, setCategoryid] = useState("");
  const [productimage, setProductimage] = useState("");
  const [loader , setLoader] = useState(false)
  const handleImage = (e) =>{
      const file = e.target.files[0]
      const allowedTypes = ["image/png", "image/jpg", "image/jpeg"];
      if(!allowedTypes.includes(file.type)){
          toast.error('Only png , jpeg or jpg images allowed')
      }else{
         setProductimage(file)
      }
  }

  useEffect(()=>{
      let arr = []
      for(let i = 0; i<category_data.length ; i++){
        arr.push({
          value: category_data[i]._id,
          label: category_data[i].categoryname,
        });
      }
      setCategorystate(arr)
  },[category_data])

  const [inpval, setInpval] = useState({
    productname: "",
    price: "",
    discount: "",
    quantity: "",
    description: "",
  });

  const { productname, price, discount, quantity, description } = inpval;

  const handlechange = (e) => {
    const { name, value } = e.target;
    setInpval({
      ...inpval,
      [name]: value,
    });
  };

  //  get category id
  const handleCategoryChange = (selectedopt) => {
    setCategoryid(selectedopt.value);
  };

  const handlesubmit = (e) => {
    setLoader(true)
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("productname", productname);
    formdata.append("price", price);
    formdata.append("quantity", quantity);
    formdata.append("discount", discount);
    formdata.append("description", description);
    formdata.append("productimage", productimage);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    if (
      !productname || !price || !quantity || !discount || !description || !categoryid || !productimage){
      toast.error("This field is required");
    } else {
      const datasent = {
        formdata,
        config,
        categoryid,
      };
      dispatch(addProductbyadmin(datasent)).then((res)=>{
        setLoader(false)
        if(res.payload){
          setInpval({
            productname: "",
            price: "",
            quantity: "",
            discount: "",
            description: "",
          });
          setCategoryid("")
          setProductimage("") 
        }
      })
    }
  };

  return (
    <div>
      { loader ?  <Spiner/> :
        <section className="container signup_login_form_caontainer mb-5">
        <div className="row justify-content-center">
          <div className="col-md-6  register_user">
            <h1 className="text-center mt-3">Add Product</h1>

            <form>
              <div className="mt-2 mb-3">
                <label for="exampleInputname" className="form-label">
                  Product
                </label>{" "}
                <br />
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputname"
                  aria-describedby="emailHelp"
                  placeholder="Product name"
                  name="productname"
                  value={inpval.productname}
                  onChange={handlechange}
                />
              </div>
              <div className="mt-3">
                <label htmlFor="">Product Category</label>
                <Select options={categoryState} onChange={handleCategoryChange} />
              </div>

              <div className="mt-2 mb-3">
                <label for="exampleInputname" className="form-label">
                  Price
                </label>{" "}
                <br />
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputname"
                  aria-describedby="emailHelp"
                  placeholder="Price"
                  name="price"
                  value={inpval.price}
                  onChange={handlechange}
                />
              </div>
              <div className="mt-2 mb-3">
                <label for="exampleInputname" className="form-label">
                  Quantity
                </label>{" "}
                <br />
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputname"
                  aria-describedby="emailHelp"
                  placeholder="Quality"
                  name="quantity"
                  value={inpval.quantity}
                  onChange={handlechange}
                />
              </div>
              <div className="mt-2 mb-3">
                <label for="exampleInputname" className="form-label">
                  Discount
                </label>{" "}
                <br />
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputname"
                  aria-describedby="emailHelp"
                  placeholder="Quality"
                  name="discount"
                  value={inpval.discount}
                  onChange={handlechange}
                />
              </div>
              <div className="mt-2 mb-3">
                <label for="exampleInputname" className="form-label">
                  Description
                </label>{" "}
                <br />
                <textarea
                  style={{ width: "100%" }}
                  value={inpval.description}
                  name="description"
                  onChange={handlechange}
                />
              </div>
              <div className="mt-2 mb-3">
                <label for="exampleInputImg" className="form-label">
                  Upload Product
                </label>{" "}
                <br />
                <input
                  type="file"
                  className="form-control"
                  id="exampleInputimg"
                  aria-describedby="emailHelp"
                  placeholder="Enter first name"
                  name="productimage"
                  onChange={handleImage}
                />
              </div>

              <div className="btn_register">
                <button onClick={handlesubmit}>Add Product</button>
              </div>
            </form>
          </div>
        </div>
        </section>
      }
    </div>
  );
}
