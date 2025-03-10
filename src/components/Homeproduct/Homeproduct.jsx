import React from "react";
import "./homeproduct.scss";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
export default function Homeproduct({ productdata, newarrival }) {
  console.log("data", newarrival);

  return (
    <section className="home-product mt-3">
      {/* Products */}
      <Container>
        <h2>Products</h2>
        <Row>
          {productdata.map((element) => {
            return (
              <>
                {element.getAllProducts.slice(0, -2).map((data, key) => {
                  return (
                    <Col key={key} md={3} className="mb-3 d-flex">
                      <Card
                        style={{ width: "100%", height: "100%" }}
                        className="shadow"
                      >
                        <Card.Img
                          variant="top"
                          src={data.productimage}
                          style={{ width: "100%", height: "250px" }}
                        />
                        <Card.Body className="d-flex flex-column">
                          <Card.Title>{data.productname}</Card.Title>
                          <button className="buy-now mt-auto">Buy Now</button>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
              </>
            );
          })}
        </Row>
      </Container>
      {/* get latest products*/}
      <Container className="mt-4">
        <h2>New Arrivals</h2>
        <Row>
          {newarrival.slice(0, 4).map((item, index) => {
            return (
              <>
                <Col md={3} key={index} className="mb-3 d-flex">
                  <Card
                    style={{ width: "100%", height: "100%" }}
                    className="shadow"
                  >
                    <Card.Img variant="top" src={`${item.productimage}`}  style={{ width: "100%", height: "250px" }} />
                    <Card.Body className="d-flex flex-column">
                      <Card.Title>{item.productname}</Card.Title>
                      <button className="buy-now">Buy Now</button>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
