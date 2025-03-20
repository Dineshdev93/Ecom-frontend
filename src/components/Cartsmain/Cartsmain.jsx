import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import "./cartsmain.scss";
import Spiner from "../../pages/Loader/Spiner";
import {
  AddtoCart,
  Delete_Single_Product,
  RemoveItem,
} from "../../redux/slice/CartSlice/cartSlice";
import { useDispatch } from "react-redux";
export default function Cartsmain({ cartdata, loading }) {
  // Calculate total amount
  const totalAmount = cartdata?.reduce((total, item) => {
    return total + item.productDetails.price * item.quantity;
  }, 0);

  const dispatch = useDispatch();
  const handledecrement = (id) => {
    const data = {
      id,
    };
    dispatch(Delete_Single_Product(data));
  };

  //  handle increment function
  const handelincrement = (id) => {
    const data = {
      id,
    };
    console.log(id);
    dispatch(AddtoCart(data));
  };

  // Remove whole item from cart
  const RemoveWholeitem = (id) => {
    const data = {
      id,
    };
    dispatch(RemoveItem(data));
  };

  return (
    <section className="cart-section">
      <Container>
        <Row className="justify-content-between">
          <Col md={8} className="shadow cart-section-left mb-4">
            <h4>
              {" "}
              
              {cartdata?.length > 0
                ? ` Items (${cartdata?.length})`
                : <div className="d-flex flex-column align-items-center justify-content-center">
                  <div>
                     <img src="/empty-cart.avif" alt="" width="400" />
                  </div>
                    <h1>Cart is Empty !</h1>
                  </div>}
              
            </h4>
            {loading ? (
              <Spiner />
            ) : (
              cartdata?.map((item, index) => {
                return (
                  <>
                    <Row className="justify-content-between" key={index}>
                      <Col md={3}>
                        <img
                          src={`${item.productDetails.productimage}`}
                          width={200}
                          alt=""
                        />
                      </Col>
                      <Col md={5} className="mt-5">
                        <h3>{item.productDetails.productname}</h3>
                        <span> Discount : {item.productDetails.discount}</span>
                        <p> MRP : {item.productDetails.price}</p>
                        <p>Delevery Date :- 2023-10-12</p>
                        <div className="d-flex gap-2">
                          <div>
                            <button
                              className="btn btn-danger"
                              onClick={() => RemoveWholeitem(item.productid)}
                            >
                              <i class="fa-solid fa-trash"></i>&nbsp; Remove
                              Item
                            </button>
                          </div>
                          <div>
                            <button className="btn btn-secondary">
                              Move to wishlist
                            </button>
                          </div>
                        </div>
                      </Col>
                      <Col md={3} className="mt-5">
                        <div className="increase-decrese">
                          <button
                            onClick={() => handledecrement(item.productid)}
                          >
                            -
                          </button>
                          &nbsp;
                          <span>{item.quantity}</span> &nbsp;
                          <button
                            onClick={() => handelincrement(item.productid)}
                          >
                            +
                          </button>
                        </div>
                        <div style={{ marginTop: "8rem" }}>
                          <h6>
                            Total : Rs.{" "}
                            {item.productDetails.price * item.quantity}
                          </h6>
                        </div>
                      </Col>
                    </Row>
                    <hr />
                  </>
                );
              })
            )}
          </Col>

          <Col md={4} className="">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Text>
                  <h4>Total Amount of All Products</h4>
                  <span>Amount : {totalAmount}</span> <br />
                  <button className="btn btn-primary">Checkout</button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
