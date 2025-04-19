import React from "react";
import { NavLink ,useNavigate} from "react-router-dom";
import "./header.scss";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import { useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import {useSelector , useDispatch}  from 'react-redux'
import { Userlogout, Userverifyed } from "../../redux/slice/userAuthSlice/UserSlice";
import { Get_Cart_Data } from "../../redux/slice/CartSlice/cartSlice";

export default function Header() {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  

  // User verified
  
  const {LoggeduserData ,Loginuserdata} = useSelector((state)=>state.userauth)
  const {removecartdata}  = useSelector((state)=>state.userauth)    
 
  
   
  const navigate = useNavigate();
  
    const dispatch = useDispatch();

    useEffect(()=>{
       dispatch(Userverifyed());
      },[Loginuserdata])

     
      const cartData = useSelector((state)=>state.cart.get_cart_data)
      const {cart_data_post} = useSelector((state)=>state.cart)
      // Call cart data api
      useEffect(()=>{
          dispatch(Get_Cart_Data());
          // console.log("Again call"); 
       },[LoggeduserData, cart_data_post , removecartdata])
      
      const logout = () =>{
        dispatch(Userlogout()).then((res)=>{
                localStorage.removeItem("user-token");
                navigate('/login')
        })
       }
    
  return (
    <header className="mb-4">
      <nav className="container ">
        <div className="left">
          <NavLink to={"/"}>
            {/* <img src="https://i.postimg.cc/TP6JjSTt/logo.webp" alt="logo" /> */}
            <img src="./logo.png" alt="logo" style={{width:"22%"}} />
          </NavLink>
        </div>
        <div className="right">
          <div className="hamburger" onClick={handleShow}>
            <i class="fa-bars fa-solid"></i>
          </div>
          <div className="p1">
            <NavLink to={"/products"}>Products</NavLink>      
          </div>
          <div className="badge-icon">
            <NavLink to={  '/cart'}>
              <i class="counts fa-cart-shopping fa-solid" data-count={2} style={{color:"black"}}></i>
              <span className="badge">{LoggeduserData?.length > 0 ?  cartData?.length : 0}</span>
            </NavLink>
          </div>
          <div className="dropdown-basic">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
              
                {
                  LoggeduserData?.length > 0  ? LoggeduserData.map((item)=>{
                    return (
                      <>
                         <img src={`${item.userprofile}`} alt="logo" className="user-profile"/>
                      </>
                    )
                  }) :
                  <i class="fa-regular fa-user"></i>
                } 
              </Dropdown.Toggle> 
              <Dropdown.Menu>
                {
                  LoggeduserData?.length ===  0  ?
                    <Dropdown.Item href="/login">Log in</Dropdown.Item>
                  :
                  <>
                    <NavLink className={"profile_link"} to="/userprofile">Profile</NavLink>
                    <Dropdown.Item href="#" onClick={logout} >Log out</Dropdown.Item>
                  </> 
                }
              </Dropdown.Menu>
            </Dropdown>   
          </div>
        </div>
      </nav>

      <Offcanvas
        show={show}
        onHide={handleClose}
        className="sidebar"
        style={{ width: "85%", height: "100%", backgroundColor: "rgb(203 203 203)" }}
      >
        <Offcanvas.Header closeButton >
          {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}

          <span>
            <i
              class="fa-regular fa-user"
              style={{ color: "black !important" }}
            ></i>
          </span>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="p2">
            <NavLink to={"/products"}>Products</NavLink>
          </div>
          <div className="p2">
            {/* <NavLink to={"/login"}>Sign in</NavLink> */}
            {
                  LoggeduserData?.length <=  0  ?
                    <Dropdown.Item href="/login">Log in</Dropdown.Item>
                  :
                  <>
                    <NavLink to="/userprofile">Profile</NavLink>
                    <Dropdown.Item href="#" onClick={logout} >Log out</Dropdown.Item>
                  </> 
                }
          </div>
          <div className="badge-icon2 mt-3" >
            <span onClick={()=>navigate('/cart')}>
              <i
                class="counts fa-cart-shopping fa-solid"
                style={{ color: "white" }}
                data-count={0}
              ></i>
              <span className="badge">{LoggeduserData?.length > 0 ?  cartData?.length : 0}</span>
            </span>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
}
