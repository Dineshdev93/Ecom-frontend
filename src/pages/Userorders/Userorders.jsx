import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { GetOrderSlice } from "../../redux/slice/orderSlice/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import Spiner from "../Loader/Spiner";
export default function Userorders() {
  const dispatch = useDispatch();
  const {OrdersState , loading} = useSelector((state)=> state.orders)
  console.log("ordeeeee" , OrdersState);
  
  // Get orders details
  useEffect(() => {
    dispatch(GetOrderSlice());
  }, []);

  return (
    <>
      <Container className="mt-5">
       
            <Row className="justify-content-between">
              {
                loading ? <Spiner/> : OrdersState?.map((el , index)=>{
                   return(
                    <>
              <Card style={{ width: "100%", padding: "10px", display: "flex" , flexDirection:"row",justifyContent:"space-around" , marginTop:"4rem" }}>
                <div>
                  <h5>Order id : {el._id}</h5>
                  <img src={`${el?.orderItems[0]?.productDetails?.productimage}`} width={400} height={200} alt="" />
                </div>
                <div className="mt-5">
                  <h3>{el?.orderItems[0]?.productDetails?.productname}</h3>
                  <span><b>Discount : </b>{el?.orderItems[0]?.productDetails?.discount}</span> % <br />
                  <span><b>Address : </b>{el?.address}</span> <br />
                  <span><b>Total Price : </b>{el?.totalPrice}</span>
                  <p><b>Shipping status :- </b>{el?.orderstatus}</p>
                </div>
              </Card>   
                    </>
                   )
                })
              }
            </Row>
          
      </Container>
    </>
  );
}
