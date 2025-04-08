import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { GetOrderSlice } from "../../redux/slice/orderSlice/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import Spiner from "../Loader/Spiner";
import "./userOrder.scss";

export default function Userorders() {
  const dispatch = useDispatch();
  const { OrdersState, loading } = useSelector((state) => state.orders);

  console.log("orders" , OrdersState);
  

  useEffect(() => {
    dispatch(GetOrderSlice());
  }, []);

  return (
    <Container className="user-orders">
      <h2 className="text-center mb-4">My Orders</h2>
      <Row>
        {loading ? (
          <Spiner />
        ) : (
          OrdersState?.map((el, index) => (
            <Col lg={12} key={index} className="mb-4">
              <Card className="order-card">
                <div className="order-image">
                  <img
                    src={`${el?.orderItems[0]?.productDetails?.productimage}`}
                    alt="product"
                  />
                </div>
                <div className="order-details">
                  <h5>Order ID: {el._id}</h5>
                  <h4>{el?.orderItems[0]?.productDetails?.productname}</h4>
                  <p>
                    <strong>Discount:</strong> {el?.orderItems[0]?.productDetails?.discount}%
                  </p>
                  <p>
                    <strong>Address:</strong> {el?.address}
                  </p>
                  <p>
                    <strong>Total Price:</strong> ₹{el?.totalPrice}
                  </p>
                  <p>
                    <strong>Shipping Status:</strong>{" "}
                    <span className={`status ${el?.orderstatus.toLowerCase()}`}>
                      {el?.orderstatus}
                    </span>
                  </p>
                </div>
              </Card>
            </Col>
          ))
        )}

         {
          OrdersState === undefined &&
          <Col lg={12}>
                <div className="d-flex justify-content-center">
                    <img src="./no-orders.webp" alt="" />             
                </div>
                <div className="d-flex justify-content-center">
                     <button className="btn btn-primary" >Login</button>
                </div>
          </Col>
         }
      </Row>
    </Container>
  );
}
