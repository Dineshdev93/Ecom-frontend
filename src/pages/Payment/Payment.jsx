import React from 'react'
import { useLocation } from 'react-router-dom'
import { CardNumberElement, CardCvcElement, CardExpiryElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { useDispatch } from 'react-redux'
import { PlaceOrderSlice } from '../../redux/slice/paymentsSlice/paymentsSlice'

const Payment = () => {
  
    const location = useLocation()
    console.log(location);
    const dispatch = useDispatch()
    const placeOrder = (e) =>{
        e.preventDefault()
        const paymenttotal = {
          totalamount : location.state.totalPrice*100 
        }
        dispatch(PlaceOrderSlice(paymenttotal));
    }
    
  return (
    <section style={{marginTop : '7rem'}}>
          <section className='sectionset d-flex justify-content-center align-items-center'>
                     <div className="form_data">
                       <div className="form_heading">
                         <h1>Enter Card Details</h1>
                       </div>
                       <form action=""> 
                         <div className="form_inputs mb-2 form-control p-3"> 
                           <CardNumberElement />
                         </div>
                         <div className="form_inputs mb-2 form-control p-3">
                           <CardExpiryElement />
                         </div>
                         <div className="form_inputs form-control p-3">
                           <CardCvcElement />
                         </div>
                         <button className='btn btn-success mt-3 w-100 p-2'onClick={placeOrder}>Place Order</button>
                       </form>
                     </div>
                   </section>
    </section>
  )
}

export default Payment
