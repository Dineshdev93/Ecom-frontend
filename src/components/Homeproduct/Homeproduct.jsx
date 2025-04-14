import React from "react";
import "./homeproduct.scss";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import Spiner from "../../pages/Loader/Spiner";
import {  useNavigate } from "react-router-dom";
export default function Homeproduct({ productdata, newarrival, loading }) {
 
 
  const navigate = useNavigate();
  return (
    <section className="home-product mt-3">
      {/* Products */}
      <Container>
        <h2 className="heading mt-5 mb-4">TOP SELLING</h2>
        {loading ? (
          <Spiner />
        ) : (
          <Row>
            {productdata.map((element) => {
              return (
                <>
                  {element.getAllProducts.slice(0, -4).map((data, key) => {
                    return (
                      <Col
                        key={key}
                        md={3}
                        xs={6}
                        sm={6}
                        className="mb-3 d-flex"
                        onClick={() => navigate(`productsdetail/${data._id}`,{state:{ categoryid: data.categoryid }})}
                        style={{ cursor: "pointer" }}
                      >
                        <Card style={{ width: "100%", height: "100%" }}>
                          <Card.Img
                            variant="top"
                            src={data.productimage}
                            style={{ width: "100%", height: "100%" }}
                          />
                          <Card.Body className="d-flex flex-column">
                            <Card.Title>{data.productname}</Card.Title>

                            <div
                              style={{ fontWeight: "600" }}
                              className="d-flex gap-3"
                            >
                              <div>Rs {data.price}</div>
                              <div className="discount">-{data.discount}%</div>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    );
                  })}
                </>
              );
            })}
          </Row>
        )}
        <div className="d-flex justify-content-center align-items-center">
          <Col md={2}>
            <button
              className="buy-now mt-auto"
              onClick={() => navigate("/products")}
            >
              View All
            </button>
          </Col>
        </div>
      </Container>
      {/* get latest products*/}
      <Container className="mt-4">
        <hr  className="mt-5 mb-5"/>
        <h2 className="heading">New Arrivals</h2>
        {loading ? (
          <Spiner />
        ) : (
          <Row>
            {newarrival.slice(0, 4).map((item, index) => {
              return (
                <>
                  <Col md={3} xs={6} sm={6} key={index} className="mb-3 d-flex mt-4"   onClick={() => navigate(`productsdetail/${item._id}`,{state:{ categoryid: item.categoryid }})} style={{cursor:"pointer"}}>
                    <Card
                      style={{ width: "100%", height: "100%" }}
                      
                    >
                      <Card.Img
                        variant="top"
                        src={`${item.productimage}`}
                        style={{ width: "100%", height: "100%" }}
                      />
                      <Card.Body className="d-flex flex-column">
                        <Card.Title>{item.productname}</Card.Title>
                        <div
                          style={{ fontWeight: "600" }}
                          className="d-flex gap-3"
                        >
                          <div>Rs {item.price}</div>
                          <div className="discount">-{item.discount}%</div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </>
              );
            })}
          </Row>
        )}
        <div className="d-flex justify-content-center align-items-center">
          <Col md={2} className="mt-5 mb-5">
            <button
              className="buy-now mt-auto"
              onClick={() => navigate("/products")}
            >
              View All
            </button>
          </Col>
        </div>
      </Container>
    </section>
  );
}
