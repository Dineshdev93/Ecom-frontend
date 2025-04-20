import React, { useState } from "react";
import "./homecontact.scss";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { userContact } from "../../redux/slice/userAuthSlice/UserSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FaqSection from "../FaqSection/Faqsection";

// custom arrow components
const NextArrow = ({ onClick }) => (
  <button className="custom-arrow next" onClick={onClick}>
    <img src="./nextbtn.png" alt="" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button className="custom-arrow prev" onClick={onClick}>
    <img src="./prevbtn.png" alt="" />
  </button>
);

export default function Homecontact() {
  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setInpval({
      ...inpval,
      [name]: value,
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(inpval.email === "" || inpval.message === "" || inpval.name === ""){
        toast.error("All fields are required")
    }else{

      dispatch(userContact(inpval)).then((res) => {
        console.log(res.payload);
        setInpval({ name: "", email: "", message: "" });
        toast.success("Sent Successfully !");
      });
    }

  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* <div style={{ width: "100%" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56300.409579012456!2d75.35209255698669!3d28.122868041403567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3913390583f17b4d%3A0xb717cafeaaf8c602!2sJhunjhunu%2C%20Rajasthan%20333001!5e0!3m2!1sen!2sin!4v1738580156576!5m2!1sen!2sin"
          width="100%"
          height="600"
          style={{ border: "0;" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div> */}
      <Container>
        <div className="customer-feedback">
          <Slider {...settings}>
            <div className="feedback-card">
              <div className="rateing-star">
                <i className="fa-solid fa-star"></i>&nbsp;
                <i className="fa-solid fa-star"></i>&nbsp;
                <i className="fa-solid fa-star"></i>&nbsp;
                <i className="fa-solid fa-star"></i>&nbsp;
                <i className="fa-regular fa-star"></i>&nbsp;
              </div>
              <div className="d-flex ">
                <h5>- Alice</h5> &nbsp;
                <img src="./righttic.png" alt="" width={20} height={20} />
              </div>
              <p>
                "Great experience, loved the quality! The product arrived on
                time, well-packaged. Customer support was super helpful !
              </p>
            </div>
            <div className="feedback-card">
              <div className="rateing-star">
                <i className="fa-solid fa-star"></i>&nbsp;
                <i className="fa-solid fa-star"></i>&nbsp;
                <i className="fa-solid fa-star"></i>&nbsp;
                <i className="fa-regular fa-star"></i>&nbsp;
                <i className="fa-regular fa-star"></i>&nbsp;
              </div>
              <div className="d-flex">
                <h5>- Bob</h5>&nbsp;
                <img src="./righttic.png" alt="" width={20} height={20} />
              </div>
              Fast delivery and amazing support! The checkout process was smooth
              and easy. Loved how quickly I got my order. Highly recommend to
              everyone I know
            </div>
            <div className="feedback-card">
              <div className="rateing-star">
                <i className="fa-solid fa-star"></i>&nbsp;
                <i className="fa-solid fa-star"></i>&nbsp;
                <i className="fa-solid fa-star"></i>&nbsp;
                <i className="fa-solid fa-star"></i>&nbsp;
                <i className="fa-regular fa-star"></i>&nbsp;
              </div>
              <div className="d-flex ">
                <h5>- Charlie</h5> &nbsp;
                <img src="./righttic.png" alt="" width={20} height={20} />
              </div>
              Highly recommended for electronics. Wide range of quality gadgets.
              Everything arrived in perfect condition. Will definitely shop here
              again!
            </div>
            <div className="feedback-card">
              <div className="rateing-star">
                <i className="fa-solid fa-star"></i>&nbsp;
                <i className="fa-solid fa-star"></i>&nbsp;
                <i className="fa-regular fa-star"></i>&nbsp;
                <i className="fa-regular fa-star"></i>&nbsp;
                <i className="fa-regular fa-star"></i>&nbsp;
              </div>
              <div className="d-flex">
                <h5>- Diana</h5> &nbsp;
                <img src="./righttic.png" alt="" width={20} height={20} />
              </div>
              Good pricing and product variety. Found exactly what I needed
              fast. Checkout was smooth and simple. Will return for more
              purchases!
            </div>
            <div className="feedback-card">
              <div className="rateing-star">
                <i className="fa-solid fa-star"></i>&nbsp;
                <i className="fa-solid fa-star"></i>&nbsp;
                <i className="fa-solid fa-star"></i>&nbsp;
                <i className="fa-solid fa-star"></i>&nbsp;
                <i className="fa-regular fa-star"></i>&nbsp;
              </div>
              <div className="d-flex">
                <h5>- Ethan</h5> &nbsp;
                <img src="./righttic.png" alt="" width={20} height={20} />
              </div>
              Will definitely buy again! The quality exceeded my expectations.
              Customer service was super helpful. Shopping here felt totally
              seamless
            </div>
          </Slider>
        </div>
      </Container>
        <div className="mt-5 mb-5">
            <FaqSection/>
        </div>

      <section className="home-contact mt-5">
        <Container>
          <Row>
            <Col md={4}>
              <span
                style={{ color: "red", letterSpacing: "1px", fontSize: "22px" }}
              >
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
                  Webnatics LTD Voukourestiou, 25 Neptune House, <br />
                  1st floor, Flat/Office 11 Zakaki, 3045,
                </p>
                <h2>INDIA</h2>
                <p>
                  Webnatics LTD Voukourestiou, 25 Neptune House, <br />
                  Limassol, Cyprus.
                </p>
              </div>
            </Col>
            <Col md={8}>
              <form action="" className="contact-us-form">
                <Row>
                  <Col md={6} className="mb-3">
                    <input
                      type="text"
                      name="name"
                      value={inpval.name}
                      id=""
                      placeholder="Name"
                      onChange={handlechange}
                    />
                  </Col>
                  <Col md={6}>
                    <input
                      type="email"
                      name="email"
                      value={inpval.email}
                      id=""
                      placeholder="Email"
                      onChange={handlechange}
                    />
                  </Col>
                  <Col md={12} className="mt-4">
                    <textarea
                      name="message"
                      id=""
                      value={inpval.message}
                      cols="30"
                      rows="10"
                      onChange={handlechange}
                      placeholder="Mesaage"
                    ></textarea>
                  </Col>
                  <Col md={12} className="mt-4">
                    <button onClick={handleSubmit}>Send Mesage</button>
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
