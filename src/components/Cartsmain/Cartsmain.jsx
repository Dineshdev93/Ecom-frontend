import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Spiner from "../../pages/Loader/Spiner";
import {
  AddtoCart,
  Delete_Single_Product,
  RemoveItem,
} from "../../redux/slice/CartSlice/cartSlice";
import "./cartsmain.scss";
import moment from 'moment'
import { useNavigate} from "react-router-dom";

export default function Cartsmain({ cartdata, loading }) {
  const dispatch = useDispatch();
  const totalAmount = cartdata?.reduce(
    (total, item) => total + item.productDetails.price * item.quantity,
    0
  );

  const handleDecrement = (id) => dispatch(Delete_Single_Product({ id }));
  const handleIncrement = (id) => dispatch(AddtoCart({ id }));
  const removeWholeItem = (id) => dispatch(RemoveItem({ id }));

  // delevery date
  const dateAftertwoDays = moment().add(2 , 'days').format('DD-MM-YYYY')

  const navigate = useNavigate()
  

  return (
    <section className="cart-container mt-5">
      <Container>
        <Row>
          <Col md={8} className="cart-items-section">
            <h3 className="cart-title">
              {cartdata?.length > 0 ? `Your Shopping Cart (${cartdata.length})` : "Your Cart is Empty"}
            </h3>

            {loading ? (
              <Spiner />
            ) : cartdata?.length === 0 ? (
              <div className="shadow empty-cart">
                <img src="/empty-cart.avif" alt="Empty Cart" className="empty-cart-img" />
                <p className="text-center empty-cart-text">Looks like you haven't added anything yet.</p>
              </div>
            ) : (
              cartdata?.map((item, index) => (
                <Card className="shadow-sm cart-item" key={index}>
                  <Row className="align-items-center p-3">
                    <Col md={3} className="cart-item-image">
                      <img
                        src={item.productDetails.productimage || "https://via.placeholder.com/150"}
                        alt="Product"
                        className="rounded img-fluid"
                      />
                    </Col>
                    <Col md={5} className="cart-item-details">
                      <h5 className="fw-bold">{item.productDetails.productname}</h5>
                      <p className="text-muted">Discount: {item.productDetails.discount}%</p>
                      <p className="fw-semibold">Price: Rs. {item.productDetails.price}</p>
                      <p className="text-success delivery-text">Free Delivery : {dateAftertwoDays}</p>
                      <div className="d-flex cart-actions gap-2">
                        <Button variant="outline-danger" size="sm" onClick={() => removeWholeItem(item.productid)}>
                          Remove
                        </Button>
                        <Button variant="outline-secondary" size="sm">Move to Wishlist</Button>
                      </div>
                    </Col>
                    <Col md={4} className="d-flex flex-column align-items-center cart-item-controls">
                      <div className="d-flex align-items-center gap-2 quantity-controls">
                        <Button size="sm" variant="outline-dark" onClick={() => handleDecrement(item.productid)}>-</Button>
                        <span className="fw-bold">{item.quantity}</span>
                        <Button size="sm" variant="outline-dark" onClick={() => handleIncrement(item.productid)}>+</Button>
                      </div>
                      <h6 className="fw-semibold item-total mt-3">Total: Rs. {item.productDetails.price * item.quantity}</h6>
                    </Col>
                  </Row>
                </Card>
              ))
            )}
          </Col>

          <Col md={4} className="cart-summary-section mt-5">
            <Card className="shadow-sm cart-summary">
              <Card.Body>
                <h4 className="fw-bold">Order Summary</h4>
                <p className="text-muted">Total Items: {cartdata?.length || 0}</p>
                <h5 className="fw-bold">Total Amount: Rs. {totalAmount}</h5>
                {/* <NavLink to={'/shipping'} className=" checkout-btn mt-3" >Proceed to Checkout</NavLink> */}
                <Button  className=" checkout-btn mt-3"  onClick={()=>navigate('/shipping',{state:totalAmount})}>Proceed to Checkout</Button>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
