import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Country, State } from "country-state-city"; // Import state functions
import "./shiping.css";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Shipping() {

  const location = useLocation()

  const [inpval, setInpval] = useState({
    mobile: "",
    city: "",
    pincode: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInpval({ ...inpval, [name]: value });
  };



  // Country and State Selection
  const [country, setCountry] = useState([]);
  const [countryCode, setCountryCode] = useState("");
  const [states,setStates] = useState([])
  const [finalstate , setFinalState] = useState()
  const navigate = useNavigate()
  
  

  // Fetch all countries with flags
  useEffect(() => {
    const countryData = Country.getAllCountries();
    let arr = countryData.map((c) => ({
      value: c.isoCode,
      label: (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src={`https://flagcdn.com/w40/${c.isoCode.toLowerCase()}.png`}
            alt={c.name}
            width="20"
            height="15"
          />
          {c.name}
        </div>
      ),
    }));
    setCountry(arr);

    const statedata =  State.getStatesOfCountry(countryCode);
    
    if(countryCode){
       console.log("states" , statedata);
       let statesArr = [] ;
       for(let i = 0 ; i<statedata?.length ; i++){
          const storedata = {value : statedata[i].isoCode , label : statedata[i].name}
          statesArr.push(storedata)
       }
       setStates(statesArr)
    }
  }, [countryCode]);

    
     // handle submit
 
     const {mobile , city , pincode , address} = inpval ; 
      const data = {
           mobile,
           city , 
           pincode , 
           address , 
           price : location.state,
           shippinprice : 40 , 
           totalprice : location.state+40
      }

    const handleSubmit = (e) =>{
         e.preventDefault()
       if(!city || !pincode || !address){
          toast.error("Please fill this field !")
       }else if(mobile.length !== 10){
           toast.error("Phone number is invalid !")
       } else if(!countryCode){
          toast.error("Please Select Country")
       }else if(!finalstate){
          toast.error('Please select state !')
       }else{
           navigate('/checkout',{state:data})
       }
    }

  return (
    <div>
      <section className="container signup_login_form_caontainer mb-5">
        <div className="row justify-content-center">
          <div className="col-md-6 register_user">
            <h1 className="text-center mt-3">Shipping Address</h1>
            <form>
              {/* Mobile Number */}
              <div className="mt-2 mb-3">
                <label htmlFor="mobile" className="form-label">
                  Enter your mobile number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="mobile"
                  placeholder="Enter your mobile number"
                  name="mobile"
                  onChange={handleChange}
                />
              </div>

              {/* Country Dropdown */}
              <div className="mt-2 mb-3">
                <label htmlFor="country" className="form-label">
                  Select Your Country
                </label>
                <Select
                  options={country}
                  placeholder="Select Country"
                  onChange={(e)=>setCountryCode(e.value)}
                />
              </div>

              {/* State Dropdown */}
              <div className="mt-2 mb-3">
                <label htmlFor="state" className="form-label">
                  Select Your State
                </label>
                <Select
                  options={states}
                  placeholder="Select State"
                 onChange={(e)=>setFinalState(e.label)}
                />
              </div>

              {/* City Input */}
              <div className="mt-2 mb-3">
                <label htmlFor="city" className="form-label">
                  Enter your City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  placeholder="Enter Your City"
                  name="city"
                  onChange={handleChange}
                />
              </div>

              {/* Pincode Input */}
              <div className="mt-2 mb-3">
                <label htmlFor="pincode" className="form-label">
                  Enter Your Pincode
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="pincode"
                  placeholder="Enter Your Pincode"
                  name="pincode"
                  onChange={handleChange}
                />
              </div>

              {/* Address Input */}
              <div className="mt-2 mb-3">
                <label htmlFor="address" className="form-label">
                  Enter Your Address
                </label>
                <textarea
                  name="address"
                  id="address"
                  cols="30"
                  rows="4"
                  placeholder="Enter Address"
                  onChange={handleChange}
                  style={{ width: "100%" }}
                ></textarea>
              </div>

              <div className="btn_register">
                <button type="submit" onClick={handleSubmit}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
