import React, { useEffect } from 'react'
import ShowProductsbyid from '../../components/ShowProductsbyid';
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux'
import { GetSingleproduct } from '../../redux/slice/adminproductSlice/adminproductSlice';
export default function Showproducts() {
     const dispatch = useDispatch();
      const param = useParams();
      const product_id = param.id;
    
      const {SingleproductState} = useSelector((state)=>state.products)
    
      
    
      const getSingleProductdata = () =>{
           dispatch(GetSingleproduct(product_id))
      }
      
      useEffect(()=>{
        getSingleProductdata()
      },[])
    
  return (
    <div>
       <ShowProductsbyid SingleproductState={SingleproductState}/>
    </div>
  )
}
