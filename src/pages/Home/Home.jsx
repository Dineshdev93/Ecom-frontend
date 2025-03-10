import React, { useEffect, useState } from 'react'
import Homemain from '../../components/Homemaiin/Homemain'
import Homeproduct from '../../components/Homeproduct/Homeproduct'
import Homecontact from '../../components/Homecontact/Homecontact'
import { useDispatch,useSelector } from 'react-redux'
import { getAddedproducts, Newarrivalproducts } from '../../redux/slice/adminproductSlice/adminproductSlice'

export default function Home() {
  const [page ,setPage] = useState(1)
  //  disptach function
  const dispatch = useDispatch()

  const productapi = () =>{  
    const data = {
        page
    }
    dispatch( getAddedproducts(data)).then((res)=>{})
    dispatch(Newarrivalproducts()) 
    
  }
  useEffect(()=>{
    // console.log("ddddddddddddddddddddd");
    productapi()
  },[])

   const productdata = useSelector((state)=>state.products.getProductsbyadmin) 
   const newarrival = useSelector((state)=>state.products.Statenewarrivalproducts) 
    
  return (
    <div>
         <Homemain/>
         <Homeproduct productdata={productdata} newarrival={newarrival}/>
         <Homecontact/>
    </div>
  )
}
