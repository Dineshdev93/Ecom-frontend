import React from 'react'
import { useLocation } from 'react-router-dom'
const Payment = () => {

    const location = useLocation()
    console.log(location);
    

  return (
    <div style={{marginTop : '7rem'}}>
         <h1>Payment</h1>
    </div>
  )
}

export default Payment
