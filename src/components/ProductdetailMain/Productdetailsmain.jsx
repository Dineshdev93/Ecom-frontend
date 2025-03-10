import React from "react";
import "./prodetailmain.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Select from 'react-select'
import Modal from "react-bootstrap/Modal";
const ProductDetailsMain = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  return (
    <>
      <section className="product-details">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12}>
              <h2 className="product-details__title mt-4">Product Details</h2>
            </Col>
            <Col md={6} className="product-details__image mb-4">
              <img src="/shoes.png" alt="Nike Shoes" width={500} />
            </Col>
            <Col md={6} className="product-details__info">
              <h3 className="product-details__name">Nike Shoes</h3>
              <div className="product-details__ratings">
                <span
                  className="product-details__stars"
                  style={{ color: "orange" }}
                >
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span
                  className="product-details__rating-count"
                  style={{ marginLeft: "5px" }}
                >
                  3 Ratings
                </span>
              </div>
              <div className="product-details__price">
                MRP: <span>Rs 300</span>
              </div>
              <div className="product-details__discount">
                Discount: <span>10%</span>
              </div>
              <p className="product-details__stock">
                Items left: <span>5</span>
              </p>
              <div className="product-details__delivery">
                <p>
                  Free Delivery: <span>Oct 8 - 21</span>
                </p>
                <p>
                  Fastest Delivery: <span>Tomorrow 11am</span>
                </p>
              </div>
              <h3 className="product-details__about-title">About The Item</h3>
              <p className="product-details__about">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptas tenetur asperiores repellat corporis dolor officia
                necessitatibus, reprehenderit qui alias maiores. Officia,
                maiores veritatis sint incidunt at reprehenderit cum libero
                recusandae.
              </p>
              <button className="product-details__add-to-cart ">
                Add to Cart
              </button>
            </Col>
          </Row>
        </Container>
      </section>

      {/*Customer Review Section */}
      <section className="review-section mt-5">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h2>Customer Review</h2>
            </div>
            <div className="review-button">
              <button onClick={handleShow}>Write Review</button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Write Your Review</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modals-body">
                  <div>
                    <label htmlFor="">User Name</label>
                    <input type="text" placeholder="name" disabled />
                  </div>
                  <div className="mt-3">
                    <label htmlFor="">Rateings</label>
                    <Select options={options} />
                  </div>
                  <div className="mt-3">
                    <textarea
                      className="text-area"
                      name=""
                      id=""
                      placeholder="Write here"
                    ></textarea>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="success" onClick={handleClose}>
                    Add Review
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
          <div className="d-flex gap-3 flex-wrap justify-content-around mt-3">
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Dinesh</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                    <p>
                      <div className="product-details__ratings">
                        <span
                          className="product-details__stars"
                          style={{ color: "orange" }}
                        >
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span
                          className="product-details__rating-count"
                          style={{ marginLeft: "5px" }}
                        >
                          3 Ratings
                        </span>
                      </div>
                    </p>
                  </Card.Text>
                  <Button variant="none">
                    <i
                      className="fa-solid fa-trash"
                      style={{ color: "red", fontSize: "22px" }}
                    ></i>
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Dinesh</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                    <p>
                      <div className="product-details__ratings">
                        <span
                          className="product-details__stars"
                          style={{ color: "orange" }}
                        >
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span
                          className="product-details__rating-count"
                          style={{ marginLeft: "5px" }}
                        >
                          3 Ratings
                        </span>
                      </div>
                    </p>
                  </Card.Text>
                  <Button variant="none">
                    <i
                      className="fa-solid fa-trash"
                      style={{ color: "red", fontSize: "22px" }}
                    ></i>
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Dinesh</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                    <p>
                      <div className="product-details__ratings">
                        <span
                          className="product-details__stars"
                          style={{ color: "orange" }}
                        >
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span
                          className="product-details__rating-count"
                          style={{ marginLeft: "5px" }}
                        >
                          3 Ratings
                        </span>
                      </div>
                    </p>
                  </Card.Text>
                  <Button variant="none">
                    <i
                      className="fa-solid fa-trash"
                      style={{ color: "red", fontSize: "22px" }}
                    ></i>
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Dinesh</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                    <p>
                      <div className="product-details__ratings">
                        <span
                          className="product-details__stars"
                          style={{ color: "orange" }}
                        >
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span
                          className="product-details__rating-count"
                          style={{ marginLeft: "5px" }}
                        >
                          3 Ratings
                        </span>
                      </div>
                    </p>
                  </Card.Text>
                  <Button variant="none">
                    <i
                      className="fa-solid fa-trash"
                      style={{ color: "red", fontSize: "22px" }}
                    ></i>
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Dinesh</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                    <p>
                      <div className="product-details__ratings">
                        <span
                          className="product-details__stars"
                          style={{ color: "orange" }}
                        >
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </span>
                        <span
                          className="product-details__rating-count"
                          style={{ marginLeft: "5px" }}
                        >
                          3 Ratings
                        </span>
                      </div>
                    </p>
                  </Card.Text>
                  <Button variant="none">
                    <i
                      className="fa-solid fa-trash"
                      style={{ color: "red", fontSize: "22px" }}
                    ></i>
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
export default ProductDetailsMain;
