import React from 'react'
import './footer.scss'
import { NavLink ,useNavigate} from "react-router-dom";
// import "./header.scss";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import { useEffect } from "react";

import {useSelector , useDispatch}  from 'react-redux'
import { Userlogout, Userverifyed } from "../../redux/slice/userAuthSlice/UserSlice";
import { Get_Cart_Data } from "../../redux/slice/CartSlice/cartSlice";
export default function Footer() {
  
  
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

    <>
    <div className='mt-5'>
      <footer class="footer">
  <div class="footer-container">
    <div class="about footer-section">
      <h3>About Us</h3>
      <p>We provide the best services for online recharges and payments.</p>
    </div>
    <div class="footer-section links">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Contact</a></li>
      </ul> 
    </div>
    <div class="footer-section links">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    <div class="footer-section social">
      <h3>Follow Us</h3>
      <div class="social-icons">
        <a href="#"><i class="fa-facebook fab"></i></a>
        <a href="#"><i class="fa-twitter fab"></i></a>
        <a href="#"><i class="fa-instagram fab"></i></a>
        <a href="#"><i class="fa-linkedin fab"></i></a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2025 YourCompany. All rights reserved.</p>
  </div>
</footer>

    </div>


    {/* //  showing the bottom header on mini screens */}
    <div className='bottom-header'>

     <div className='home-icon' onClick={()=>navigate('/')}>
         <i class="fa-solid fa-house"></i>
     </div>

    <div className="badge-icon2 " >
            <span onClick={()=>navigate('/cart')}>
              <i
                class="counts fa-cart-shopping fa-solid"
                style={{ color: "black" }}
                data-count={0}
              ></i>
              <span className="badge">{LoggeduserData?.length > 0 ?  cartData?.length : 0}</span>
            </span>
     </div>

         <div className="p2">
            <NavLink to={"/products"}>All Products</NavLink>
         </div>

    </div>

       
    </>



    

  )
}
