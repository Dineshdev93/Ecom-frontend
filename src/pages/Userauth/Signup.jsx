import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./loginSignup.css";
import { Registeruser } from '../../redux/slice/userAuthSlice/UserSlice';
import {useDispatch , useSelector}  from 'react-redux'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Spiner from '../Loader/Spiner'
const Signup = () => {
  const [userProfile, setUserprofile] = useState("");
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [pass,setShowpass] = useState(false) 
  const [conpass, setConpass] = useState(false)
  const navigate = useNavigate()
  const[inpval , setInpval] = useState({
      firstname:"",
      lastname:"",
      email:"",
      password:"",
      confirmpassword : ""
  })

  const handlechange = (e)=>{
      const {name,value} = e.target;
      setInpval({...inpval,[name]:value})
  }

  const dispatch = useDispatch()
  const {userRegister , loading} = useSelector((state)=>state.userauth)
  console.log("Postdata" ,userRegister , loading);
  
  const handleSubmit = (e)=>{
       e.preventDefault();
       
       let formdata = new FormData();
       formdata.append("firstname",inpval.firstname)
       formdata.append("lastname",inpval.lastname)
       formdata.append("email",inpval.email)
       formdata.append("password",inpval.password) 
       formdata.append("userprofile" , userProfile)
       formdata.append("confirmpassword",inpval.confirmpassword)
       const headers = {
              "Content-Type" : "multipart/form-data"
       }
       const data = {
           formdata ,
           headers
       }
       
       if(inpval.firstname === "" || inpval.lastname === "" || inpval.email === "" || inpval.password === "" || userProfile === ""){
           toast.error("All fields are required")
       }else{
         dispatch(Registeruser(data)).then((res)=>{
                navigate ("/login")
         }).catch((error)=>{
            console.log(error);
         })
       }
  }


  return (
    <div>
      {
        loading ? <Spiner/> :
        <section className="container signup_login_form_caontainer mb-5">
          <div className="row justify-content-center">
            <div className="col-md-6  register_user">
              <h1 className="text-center mt-3">Create Your Account</h1>
              <span className="subhedaing">
                If you have alreday registered , Plz &nbsp;{" "}
                <NavLink to={"/login"}>Log In Now</NavLink>
              </span>
              <form>
                <div className="mt-2 mb-3">
                  <label for="exampleInputname" className="form-label">
                    First Name
                  </label>{" "}
                  <br />
                  <span style={{ color: "red" }}>
                    {inpval.firstname.length === 0 && error ? error : ""}
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputname"
                    aria-describedby="emailHelp"
                    placeholder="Enter first name"
                    name="firstname"
                   onChange={handlechange}
                    
                  />
                </div>
                <div className="mt-2 mb-3">
                  <label for="exampleInputlast" className="form-label">
                    Last Name
                  </label>{" "}
                  <br/>
                  <span style={{ color: "red" }}>
                    {inpval.lastname.length === 0 && error ? error : ""}
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputlast"
                    aria-describedby="emailHelp"
                    placeholder="Enter first name"
                    onChange = {handlechange}
                    name="lastname"
                  />
                </div>
                <div className="mt-2 mb-3">
                  <label for="exampleInputImg" className="form-label">
                    Upload Image
                  </label>{" "}
                  <br />
                  <span style={{ color: "red" }}>
                    {userProfile.length === 0 && error ? error : ""}
                  </span>
                  <input
                    type="file"
                    className="form-control"
                    id="exampleInputimg"
                    aria-describedby="emailHelp"
                    placeholder="Enter first name"
                    name="userprofile"
                    onChange={(e)=>setUserprofile(e.target.files[0])}
                  />
                </div>
                <div className="mt-2 mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <br />
                  <span style={{ color: "red" }}>
                    {inpval.email.length === 0 && error ? error : ""}
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    name="email"
                    onChange={handlechange}
                  />
                </div>
                <div className="mb-3 password_container">
                  <label for="exampleInputPassword1" className="form-label">
                    Password
                  </label>{" "}
                  <br />
                  <span style={{ color: "red" }}>
                    {inpval.password.length === 0 && error ? error : ""}
                  </span>
                  <input
                    type={pass ? "text" : "password"}
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter password"
                    name="password"
                   onChange = {handlechange}
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
                  <span style={{ color: "red" }}>
                    {conpass.length === 0 && error ? error : ""}
                  </span>
                  <input
                    type={conpass ? "text" : "password"}
                    className="form-control"
                    id="exampleInputPassword2"
                    placeholder="Enter confirm password"
                    name="confirmpassword"
                     onChange={handlechange}
                  />
                  <div className="eye_icon">
                    <span onClick={()=>setConpass(!conpass)} style={{cursor:"pointer"}}>
                      <i class={conpass ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"}>
                      </i>
                    </span>
                  </div>
                </div>
                <div className="btn_register">
                  <button onClick={handleSubmit}>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      }
    </div>
  )
}

export default Signup
