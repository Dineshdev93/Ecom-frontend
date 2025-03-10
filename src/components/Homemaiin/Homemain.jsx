import React from "react";
import "./homemain.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function Homemain() {
  return (
    <section className="home-container">
      <Container>
        <Row>
          <Col md={6} style={{ marginTop: "10rem" }} className="column">
            <span className="summer-text">Summer collection</span>
            <h1 className="collection">
              Fall - Winter <br /> collection 2025
            </h1>
            <p className="stay-cool mt-3">
              "Stay cool and stylish this season with our latest Summer
              Collection! 🌞✨ Refresh your wardrobe with breezy fabrics,
              vibrant colors, and trendy designs perfect for the sunny days
              ahead. ☀️🌿"
            </p>
            <button className="shop-now mt-5">
                 Shop Now
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
