import React, { useEffect, useState } from 'react'
import {useParams ,useNavigate}  from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { forgotpassVerfy, Resetpass } from '../../redux/slice/userAuthSlice/UserSlice'

export default function Resetpassword() {
  const [password,setPassword] = useState("")
    const [pass,setShowpass] = useState(false) 
      const [conpass, setConpass] = useState(false)
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const {id , token} = useParams();
      console.log(pass);
      
      const data = {
         id, token
      }
      // forgotpassword verify
      const forgotpassword = () =>{
          dispatch(forgotpassVerfy(data)).then((res)=>{
              if(res.payload === undefined){
                navigate("*")
              }else{
                  console.log("response else", res.payload);
              }
          }).catch((error)=>{
               throw error;
          }) 
      }
      useEffect(()=>{
        forgotpassword();
      },[id , token])

      // Reset password
      const dataobject = {
          id,
          token , 
          password
      }
      const Resetpasswordfun = (e) =>{
          e.preventDefault();
          dispatch(Resetpass(dataobject)).then((res)=>{
              navigate('/login')
          })
      }
  return (
    <section className="container signup_login_form_caontainer mb-5">
          <div className="row justify-content-center">
            <div className="col-md-6  register_user">
              <h1 className="text-center mt-3">Reset Password</h1>
              <form>
                <div className="mb-3 password_container">
                  <label for="exampleInputPassword1" className="form-label">
                    Password
                  </label>{" "}
                  <br />
                  
                  <input
                    type={pass ? "text" : "password"}
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter password"
                    name="password"
                    onChange = {(e)=>setPassword(e.target.value)}
                  />
                  <div className="eye_icon">
                    <span onClick={()=>setShowpass(!pass)} style={{cursor:"pointer"}}>
                      <i class={pass ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"}></i>
                    </span>
                  </div>
                </div>
                <div className="mb-3 password_container">
                  <label for="exampleInputPassword2" className="form-label">
                    Confirm Password
                  </label>{" "}
                  <br />
                 
                  <input
                    type={conpass ? "text" : "password"}
                    className="form-control"
                    id="exampleInputPassword2"
                    placeholder="Enter confirm password"
                    name="confirmpassword"
                    //  onChange={handlechange}
                  />
                  <div className="eye_icon">
                    <span onClick={()=>setConpass(!conpass)} style={{cursor:"pointer"}}>
                      <i class={conpass ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"}>
                      </i>
                    </span>
                  </div>
                </div>
                <div className="btn_register">
                  <button onClick={Resetpasswordfun} >Reset Password</button>
                </div>
              </form>
            </div>
          </div>
        </section>
  )
}
