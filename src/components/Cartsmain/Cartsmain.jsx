import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import "./cartsmain.scss";
export default function Cartsmain() {
  return (
    <section className="cart-section">
      <Container>
        <Row className="justify-content-between">
          <Col md={8} className="mb-4 cart-section-left">
            <Row className="justify-content-between">
              <Col md={3}>
                <h4>Cart (2 items)</h4>
                <img src="/shoes.png" width={200} alt="" />
              </Col>
              <Col md={5} className="mt-5">
                <h3>Nike Shoes</h3>
                <span>Discount</span>
                <p>Price :- 200</p>
                <p>Delevery Date :- 2023-10-12</p>
                <div className="d-flex gap-2 ">
                  <div>
                    <button className="btn btn-danger">
                    <i class="fa-solid fa-trash"></i>&nbsp; Remove Item
                    </button>
                  </div>
                  <div>
                    <button className="btn btn-secondary">
                      Move to wishlist
                    </button>
                  </div>
                </div>
              </Col>
              <Col md={3} className="mt-5 ">
                 <div className="increase-decrese">
                      <button>-</button>&nbsp;
                       <span>2</span> &nbsp;
                       <button>+</button>
                 </div>
                 <div style={{marginTop:"8rem"}}>
                     <h6>Total : Rs. 2100</h6>
                 </div>
              </Col>
            </Row>
          </Col>
          <Col md={4} className="mt-5">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Text>
                   <h4>The Total Amount of</h4>
                   <span>
                       Amount : 2100 
                   </span> <br />
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
