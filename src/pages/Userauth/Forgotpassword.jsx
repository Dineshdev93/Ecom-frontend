import React from 'react'
import './loginSignup.scss'
import { useState } from 'react';
import {useDispatch ,useSelector} from 'react-redux'
import { SendPasswordlink } from '../../redux/slice/userAuthSlice/UserSlice';
import Spiner  from '../Loader/Spiner'
import { toast } from 'react-toastify';
export default function Forgotpassword() {
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();

    const data = {
        email
    }

    const {loading} = useSelector((state)=>state.userauth)

    const forgotpassword = () =>{
      if(email.length === 0){
          toast.error("Email is required")
      }else{
        dispatch(SendPasswordlink(data)).then((res)=>{
            // console.log("sadadasdasdasd",res);  
            setEmail("")
        })       
      }
    }

  return (
    <div>
      {
        loading ? <Spiner/> :
       <section className="mt-5 mb-5 forgotpassword">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-6">
                <div className="card p-5 shadow-sm">
                  <h2 className="text-center mb-3 forgotpassword-heading">
                    Forgot Password
                  </h2>
                  <p className="text-center text-secondary">
                    Enter your registered email address to receive a password
                    reset link.
                  </p>
                  <input
                    type="email"
                    name="forgotpassword"
                    id="forgotpass"
                    placeholder="Enter your email"
                    className="mt-4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="mt-4">
                    <button className="forgotsubmit" onClick={forgotpassword}>
                      Generate Link
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      }
    </div>
  )
}
