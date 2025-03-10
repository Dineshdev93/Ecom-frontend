import React from "react";
import Card from "react-bootstrap/Card";
import {Container,Row,Col} from "react-bootstrap";
export default function Checkout() {
  return (
    <section>
        {/* Shipping details */}
      <Container className="mt-4">
        <Card style={{ width: "22rem" }}>
          <Card.Body>
            <Card.Title>Shipping Address</Card.Title>
            <Card.Text>
                <span style={{fontWeight:"bold"}}> Address </span> 101 street , shyam nagar
            </Card.Text>
            <Card.Text>
                <span style={{fontWeight:"bold"}}> State </span> Ulasnagar
            </Card.Text>
            <Card.Text>
                <span style={{fontWeight:"bold"}}> City </span> Kohlapur
            </Card.Text>
            <Card.Text>
                <span style={{fontWeight:"bold"}}> Country </span> India
            </Card.Text>
            <Card.Text>
                <span style={{fontWeight:"bold"}}> Mobile </span> 8290868058
            </Card.Text>
            <Card.Text>
                <span style={{fontWeight:"bold"}}> Shipping Price</span> 1300
            </Card.Text>
            <Card.Text>
                <span style={{fontWeight:"bold"}}> Total</span> 1300
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>

         {/* shipping details */}

         <Container className="mt-5">
         <Row className="justify-content-between">
          <Col md={12} className="mb-4 cart-section-left">
            <Row className="justify-content-between">
             <Card style={{width:"100%" , padding:"10px", display:"flex"}}>

              <Col md={3}>
               
                <img src="/shoes.png" width={200} alt="" />
              </Col>
              <Col md={5} className="mt-5">
                <h3>Nike Shoes</h3>
                <span>Discount</span>
                <p>Price :- 200</p>
                <p>Delevery Date :- 2023-10-12</p>
              </Col>
             </Card>
            </Row>
          </Col>
              <hr/>
          
        </Row>
          <div>
              <button className="btn btn-success">
                   Process to Payment
              </button>
          </div>
         </Container>
         
    </section>
  );
}
