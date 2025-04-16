import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { PlaceOrderSlice } from "../../redux/slice/paymentsSlice/paymentsSlice";
import { Order } from "../../redux/slice/orderSlice/orderSlice";
import { toast } from "react-toastify";
import { Removecartdata } from "../../redux/slice/userAuthSlice/UserSlice";
import Spiner from "../Loader/Spiner";
const Payment = () => {
  const { state } = useLocation();
  const { LoggeduserData } = useSelector((state) => state.userauth);
  const order = {
    ...state,
  };
  // console.log(order);

  const dispatch = useDispatch();

  // Card confirm process logic
  const client_secret_key = useSelector(
    (state) => state.Payments.placeOrderState
  );
  const { loading } = useSelector((state) => state.Payments);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const finalPayment = async () => {
    const result = await stripe.confirmCardPayment(client_secret_key, {
      payment_method: {
        card: elements.getElement(CardNumberElement),
        billing_details: {
          name: LoggeduserData[0]?.firstname,
          email: LoggeduserData[0]?.email,
          phone: state.mobile,
          address: {
            line1: state.address,
            city: state.city,
            state: state.state,
            postal_code: state.pincode,
            country: state.country,
          },
        },
      },
    });
    if (result.paymentIntent?.status === "succeeded") {
      order.paymentdetails = {
        paymentid: result.paymentIntent.id,
        status: result.paymentIntent.status,
      };
      dispatch(Order(order)).then((res) => {
        if (res.payload) {
          dispatch(Removecartdata());
          navigate("/user-orders");
        }
      });
    } else {
      toast.error("Payment Failed");
    }
  };

  useEffect(() => {
    if (client_secret_key.length > 0) {
      finalPayment();
    }
  }, [client_secret_key]);

  const placeOrder = (e) => {
    e.preventDefault();
    const paymenttotal = {
      totalamount: state.totalPrice * 100,
    };
    dispatch(PlaceOrderSlice(paymenttotal));
  };

  return (
    <>
      <section style={{ marginTop: "7rem" }}>
        <section className="sectionset d-flex justify-content-center align-items-center">
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
              <button
                className="btn btn-success mt-3 w-100 p-2"
                onClick={placeOrder}
              >
                Place Order
              </button>
            </form>
            {loading ? <Spiner /> : ""}
          </div>
        </section>
      </section>
    </>
  );
};

export default Payment;
