import React from "react";
import Card from "react-bootstrap/Card";
import {Container,Row,Col ,Button} from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Spiner from '../Loader/Spiner'
import { useNavigate } from "react-router-dom";
import moment from 'moment'

export default function Checkout() {
  const {state} = useLocation()
  const cartData = useSelector((state)=>state.cart.get_cart_data)
  const {loading} = useSelector((state)=>state.cart)
  const dateAftertwoDays = moment().add(2 , 'days').format('DD-MM-YYYY')
  const navigate = useNavigate();
   const finaldata = {
       ...state,
       orderItems :  cartData
   } 
  console.log( finaldata);
  
     const handlePayment = () => {
         navigate('/payment' , {state : finaldata})
     }
  
  return (
    <section style={{marginTop:"7rem"}}>
        {/* Shipping details */}
        <Container className="mt-4">
      <Row className="justify-content-center">
        {/* Left Column - Shipping Address */}
        <Col md={5} xs={12} className="mb-4">
          <Card style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title>Shipping Address</Card.Title>
              <Card.Text>
                <strong>Address:</strong> {state.address}
              </Card.Text>
              <Card.Text>
                <strong>State:</strong> {state.state}
              </Card.Text>
              <Card.Text>
                <strong>City:</strong> {state.city}
              </Card.Text>
              <Card.Text>
                <strong>Pincode:</strong> {state.pincode}
              </Card.Text>
              <Card.Text>
                <strong>Mobile:</strong> {state.mobile}
              </Card.Text>
              <Card.Text>
                <strong>Shipping Price:</strong> Rs. {state.shippinPrice}
              </Card.Text>
              <Card.Text>
                <strong>Total:</strong> Rs. {state.totalPrice}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Right Column - Cart Items */}
        <Col md={7} xs={12}>
          <Row className="justify-content-between">
            {loading ? (
              <Spiner  />
            ) : (
              cartData?.map((el, index) => (
                <Card key={index} className="mb-3 p-3 w-100">
                  <Row className="align-items-center">
                    {/* Product Image */}
                    <Col xs={12} md={5} className="text-center">
                      <img
                        src={el.productDetails.productimage}
                        width="100%"
                        style={{ maxWidth: "200px", height: "auto" }}
                        alt={el.productDetails.productname}
                      />
                    </Col>

                    {/* Product Details */}
                    <Col xs={12} md={7}>
                      <h5>{el.productDetails.productname}</h5>
                      <p>Quantity: {el.quantity}</p>
                      <p>Discount: {el.productDetails.discount}%</p>
                      <p>Price: Rs. {el.productDetails.price}</p>
                      <p>Delivery Date: {dateAftertwoDays}</p>
                    </Col>
                  </Row>
                </Card>
              ))
            )}
          </Row>
        </Col>
      </Row>

      {/* Proceed to Payment Button */}
      <Row className="justify-content-center mt-4">
        <Col xs="auto">
          <Button variant="success" onClick={handlePayment}>Proceed to Payment</Button>
        </Col>
      </Row>
    </Container>
         
    </section>
  );
}
