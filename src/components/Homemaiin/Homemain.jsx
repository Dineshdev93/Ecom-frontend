import React from "react";
import "./homemain.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
export default function Homemain() {
  const navigate = useNavigate();
  return (
    <section className="home-container">
      <Container>
        <Row>
          <Col md={6} style={{ marginTop: "8rem" }} className="column">
            <h1 className="collection">
              FIND CLOTHES <br />
              THAT MATHES <br />
              YOUR STYLE
            </h1>
            <p className="stay-cool ">
              Stay cool and stylish this season with our latest Summer
              Collection! Refresh your wardrobe with breezy fabrics,
            </p>
            <button className="shop-now" onClick={() => navigate("/products")}>
              Shop Now
            </button>

            <div className="d-flex justify-content-evenly align-items-center mt-4 mb-4 show-brands">
              <div className="first-div"
                style={{
                  borderRight: "2px solid rgb(191 190 190)",
                  paddingRight: "30px",
                  marginRight: "50px",
                }}
              >
                <h1>200+ </h1>
                <span>International Brands</span>
              </div>

              <div className="second-div"
                style={{
                  borderRight: "1px solid gray",
                  paddingRight: "30px",
                  marginRight: "30px",
                }}
              >
                <h1>2000+ </h1>
                <span>High Quality Products</span>
              </div>

              <div>
                <h1>300000+ </h1>
                <span>Happy Customers</span>
              </div>
            </div>
          </Col>

          <Col md={6} style={{ marginTop: "7rem" }} className="star-parent" >
            <img src="./cop2.png" alt="" className="brand-img" />
            <div className="star-icon-1">
                <img src="./star.png" alt="" />
            </div>
            <div className="star-icon-2">
                <img src="./star.png" alt=""  width={50}/>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="brand-row">
        <Container>
          <Row className=" justify-content-evenly align-items-center">
            <Col md={3}>
              <h2>ZARA</h2>
            </Col>
            <Col md={3}>
              <h2>PRADA</h2>
            </Col>
            <Col md={3}>
              <h2>GUCCI</h2>
            </Col>
            <Col md={3}>
              <h2>CALVIN KLEIN</h2>
            </Col>
            {/* <Col md={2} >
               <h2>GUCCI</h2>  
             </Col> */}
          </Row>
        </Container>
      </div>
    </section>
  );
}
