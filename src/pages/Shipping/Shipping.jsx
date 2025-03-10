import React from 'react'
import { useState } from 'react'
import Select from 'react-select'

import "./shiping.css";
export default function Shipping() {
      const [error, setError] = useState("");   
      const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
  return (
    <div>
      <section className="container signup_login_form_caontainer mb-5">
          <div className="row justify-content-center">
            <div className="col-md-6  register_user">
              <h1 className="text-center mt-3">Shipping Address</h1>
              <form>
                <div className="mt-2 mb-3">
                  <label for="exampleInputname" className="form-label">
                    Enter your mobile number
                  </label>{" "}
                  <br />
                  {/* <span style={{ color: "red" }}>
                    {firstname.length === 0 && error ? error : ""}
                  </span> */}
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputname"
                    aria-describedby="emailHelp"
                    placeholder="Enter first name"
                    name="firstname"
                    // onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>
                
                <div className="mt-2 mb-3">
                  <label for="exampleInputname" className="form-label">
                    Select Your Country
                  </label>{" "}
                  
                  
                   <Select options={options} placeholder="Country"/>
                  
                </div>
                <div className="mt-2 mb-3">
                  <label for="exampleInputname" className="form-label">
                    Select Your State
                  </label>{" "}
                  
                  
                   <Select options={options} placeholder="State"/>
                  
                </div>
                
                <div className="mt-2 mb-3">
                  <label for="exampleInputname" className="form-label">
                    Enter your City
                  </label>{" "}
                  <br />
                  {/* <span style={{ color: "red" }}>
                    {firstname.length === 0 && error ? error : ""}
                  </span> */}
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputname"
                    aria-describedby="emailHelp"
                    placeholder="Enter Your City"
                    name="firstname"
                    // onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>
                <div className="mt-2 mb-3">
                  <label for="exampleInputname" className="form-label">
                  Enter Your Pincode
                  </label>{" "}
                  <br />
                  {/* <span style={{ color: "red" }}>
                    {firstname.length === 0 && error ? error : ""}
                  </span> */}
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputname"
                    aria-describedby="emailHelp"
                    placeholder="Enter Your Pincode"
                    name="firstname"
                    // onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>
                <div className="mt-2 mb-3" >
                  <label for="exampleInputname" className="form-label">
                  Enter Your Pincode
                  </label>{" "}
                  <br />
                  {/* <span style={{ color: "red" }}>
                    {firstname.length === 0 && error ? error : ""}
                  </span> */}
                   <textarea name="" id="" cols="30" rows="4" placeholder='Enter Address' style={{width:"100%"}}>

                   </textarea>
                </div>
                <div className="btn_register">
                  <button >Submit</button>
                </div>
              </form>
            </div>
          </div>
        </section>
    </div>
  )
}
