import React from 'react'
import Productmainpage from '../../components/Productmainpage/Productmainpage'
import { useDispatch,useSelector } from 'react-redux'
import { getAddedproducts } from '../../redux/slice/adminproductSlice/adminproductSlice'
import { useState,useEffect } from 'react'
export default function Productpage() {
  const [page ,setPage] = useState(1)
    //  disptach function
    const dispatch = useDispatch()
  
    const productapi = () =>{  
      const data = {
          page
      }
      dispatch( getAddedproducts(data)).then((res)=>{})  
    }

    useEffect(()=>{
      // console.log("ddddddddddddddddddddd");
      productapi()
    },[])
  
     const productdata = useSelector((state)=>state.products.getProductsbyadmin) 
  return (
    <div>
        <Productmainpage productdata={productdata}/>
    </div>
  )
}
