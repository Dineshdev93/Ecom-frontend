import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AdminAuthlogin } from "../../redux/slice/adminAuthSlice/AdminSlics";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
export default function AdminLogin() {
  const [error, setError] = useState();
  const [showpass, setShowpass] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    setInpval({ ...inpval, [name]: value });
  };

  //   login functionlity
  const login = (e) => {
    e.preventDefault();
    if (inpval.email.length === 0 || inpval.password.length === 0) {
      setError("This field is required !");
    } else {
      // api call
      dispatch(AdminAuthlogin(inpval)).then((res)=>{
         if(res.payload && res.payload.token){
              localStorage.setItem("admin-token",res.payload.token)
              navigate('/admin/dashboard')
         } 
      })
    } 
  };

      const token = localStorage.getItem("admin-token");
      useEffect(()=>{
         if((token)){
             navigate('/admin/dashboard')
         }
      })

  return (
    <div>
      <>
        <section className="container signup_login_form_caontainer mb-5">
          <div className="row justify-content-center">
            <div className="col-md-7  register_user">
              <h2 className="text-center">Admin Sign in!</h2>
              <div class="divider">
                <span style={{ fontSize: "20px" }}>or</span>
              </div>
              <div className="logingoogle ">
                <div>
                  <img src="/google.png" width={30} alt="" />  
                </div>
                <div>
                  <span>Log in with Google </span>
                </div>
              </div>
              <form>
                <div className="mt-3">
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
                  </label>
                  <br />
                  <span style={{ color: "red" }}>
                    {inpval.password.length === 0 && error ? error : ""}
                  </span>
                  <input
                    type={showpass ? "text" : "password"}
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter password"
                    name="password"
                    onChange={handlechange}
                  />
                  <div className="eye_icon">
                    <span
                      onClick={() => setShowpass(!showpass)}
                      style={{ cursor: "pointer" }}
                    >
                      <i
                        className={
                          showpass
                            ? "fa-regular fa-eye"
                            : "fa-regular fa-eye-slash"
                        }
                      ></i>
                    </span>
                  </div>
                </div>

                <div className="mb-3 forgotpasslink">
                  <NavLink to={"/admin-forgot-password"}>
                    Forfgot password
                  </NavLink>
                </div>
                <div className="btn_register">
                  <button onClick={login}>Log in</button>
                </div>

                <span className="subhedaing">
                  If you have not an account , Plz &nbsp;{" "}
                  <NavLink to={"/admin-signup"}>Signup Now</NavLink>
                </span>
              </form>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}
