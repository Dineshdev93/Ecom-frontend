import React from "react";
import "./homecontact.scss";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
export default function Homecontact() {
  return (
    <>
      <div style={{ width: "100%" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56300.409579012456!2d75.35209255698669!3d28.122868041403567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3913390583f17b4d%3A0xb717cafeaaf8c602!2sJhunjhunu%2C%20Rajasthan%20333001!5e0!3m2!1sen!2sin!4v1738580156576!5m2!1sen!2sin"
          width="100%"
          height="600"
          style={{ border: "0;" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <section className="home-contact mt-5">
        <Container>
          <Row>
            <Col md={4}>
              <span style={{ color: "red", letterSpacing: "1px",fontSize:"22px" }}>
                INFORMATION
              </span>
              <div className="contact-us-text">
                <h1>Contact Us</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Maiores nam minima praesentium aliquam, aperiam perferendis
                  vel sint cumque aut possimus officia ea aliquid quod quia quo
                  velit blanditiis fugit quisquam!
                </p>
                <h2>USA</h2>
                <p>
                Webnatics LTD
                Voukourestiou, 25 Neptune House, <br />
                1st floor, Flat/Office 11 Zakaki, 3045,
                </p>
                <h2>INDIA</h2>
                <p>
                Webnatics LTD
                Voukourestiou, 25 Neptune House, <br />
                Limassol, Cyprus.
                </p>
              </div>
            </Col>
            <Col md={8}>
                <form action="" className="contact-us-form">
                    <Row>
                         <Col md={6} className="mb-3" >
                            <input type="text" name="" id="" placeholder="Name"/>
                         </Col>
                         <Col md={6}>
                             <input type="email" name="" id="" placeholder="Email" />
                         </Col>
                         <Col md={12} className="mt-4">
                             <textarea name="" id="" cols="30" rows="10" placeholder="Mesaage"></textarea>
                         </Col>
                         <Col md={12} className="mt-4">
                             <button>Send Mesage</button>
                         </Col>
                    </Row>
                </form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
