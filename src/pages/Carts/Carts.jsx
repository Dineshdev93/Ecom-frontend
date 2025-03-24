import React, { useEffect } from 'react'
import Cartsmain from '../../components/Cartsmain/Cartsmain'
import {  Get_Cart_Data } from '../../redux/slice/CartSlice/cartSlice'
import { useSelector , useDispatch } from 'react-redux'
export default function Carts() {
      const {get_cart_data ,deleteSingleproduct,Removeitem, loading} = useSelector((state)=>state.cart)
      const {LoggeduserData} = useSelector((state)=>state.userauth)
      
      const dispatch = useDispatch()
      // Call cart data api
      useEffect(()=>{
        dispatch(Get_Cart_Data());
       },[LoggeduserData , deleteSingleproduct , Removeitem])
      
    
  return (
    <div style={{marginTop:"7rem"}}>
         <Cartsmain  cartdata={get_cart_data} loading={loading}/>
    </div>
  )
}
