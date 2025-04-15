import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Select from "react-select";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Userverifyed } from "../../src/redux/slice/userAuthSlice/UserSlice"
import Spiner from "../pages/Loader/Spiner";
import '../components/ProductdetailMain/prodetailmain.scss'
import {
  Add_review_Slice,
  Delete_Review,
  Getting_All_Products,
  Getting_Review,
} from "../redux/slice/adminproductSlice/adminproductSlice";
import { toast } from "react-toastify";
import { AddtoCart } from "../redux/slice/CartSlice/cartSlice";


export default function ShowProductsbyid(SingleproductState) {
    //  logic for showing products related from category
      // call get All product api without pagination
      useEffect(()=>{
        dispatch(Getting_All_Products())
      },[])
      
       const Allproducts = useSelector((state)=>state.products.GetAllProducts)
    
        const location = useLocation();
        const categoryid  = location?.state?.categoryid ;
        

        const filteredProducts = Allproducts.AllProducts?.filter((product) => {
            return product.categoryid?.toString() === categoryid?.toString();
        });
        console.log("state",categoryid)
        
    
      const productdata = [SingleproductState];
      // form review data collection
      const [description, setDesc] = useState("");
      const [rating, setRateing] = useState("");
      const param = useParams();
      const productid = param.id.toString();
    
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    
      const options = [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
        { value: "4", label: "4" },
        { value: "5", label: "5" },
      ];
    
      // verify user
      const { LoggeduserData, Loginuserdata, loading } = useSelector(
        (state) => state.userauth
      );
      const { getReview_state } = useSelector((state) => state.products);
      const { DeletedReview } = useSelector((state) => state.products);
    
      const dispatch = useDispatch();
      // const [username , setUsername] = useState("")
    
      const productidObj = {
        productid,
      };
    
      const username = LoggeduserData[0]?.firstname;
      useEffect(() => {
        dispatch(Userverifyed());
      }, []);
    
      const handleselect = (e) => {
        setRateing(e.value);
      };
    
      const data = {
        username,
        rating,
        description,
        productid,
      };
    
      const submitReview = (e) => {
        e.preventDefault();
        // Scroll position save karein
        if (rating.length === 0 || description.length === 0) {
          toast.error("All fields are required !");
        } else {
          if (LoggeduserData.length > 0) {
            dispatch(Add_review_Slice(data)).then((res) => {
              window.location.reload();
            });
          } else {
            toast("please login for add review !");
          }
        }
      };
    
      // show rating for a product
      const [showrating, setShowRating] = useState(0);
      useEffect(() => {
        let totalrating = 0;
    
        getReview_state.map((ele, key) => {
         return  totalrating = totalrating + parseInt(ele.rating);
        });
        setShowRating(Math.round(totalrating / getReview_state.length));
      }, [getReview_state]);
    
      // Delet review
      const deleteReview = (reviewid) => {
        const data = {
          reviewid,
        };
        dispatch(Delete_Review(data)).then((res) => {
          toast("Deleted !");
        });
      };
    
      useEffect(() => {
        dispatch(Getting_Review(productidObj));
      }, [DeletedReview]);
    
      //  addtocart function
      const handelincrement = (id) => {
        const data = {
          id,
        };
        dispatch(AddtoCart(data));
      };
       
    const navigate = useNavigate()
  return (
    <div className='products-detail-wise'>
            {/* Product details section */}
            <section className="product-details" style={{ marginTop: "7rem" }}>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12}>
              <h2 className="product-details__title mt-4">Product Details</h2>
            </Col>
            {productdata[0].SingleproductState?.map((item, indexs) => {
              return (
                <>
                  <Col
                    md={6}
                    key={indexs}
                    className="product-details__image mb-4"
                  >
                    <img
                      src={`${item.productimage}`}
                      alt="Nike Shoes"
                      className='product-details-img'
                    />
                  </Col>
                  <Col md={6} className="product-details__info">
                    <h3 className="product-details__name">
                      {item.productname}
                    </h3>
                    <div className="product-details__ratings">
                      <span
                        className="product-details__stars"
                        style={{ color: "orange" }}
                      >
                        {Array.from({ length: showrating }).map((ele, keys) => {
                          return <i className="fa-solid fa-star"></i>;
                        })}
                        {/* Empty Stars */}
                        {Array.from({ length: 5 - showrating }).map(
                          (_, index) => (
                            <i
                              key={index + showrating}
                              className="fa-regular fa-star"
                            ></i>
                          )
                        )}
                      </span>
                      <span
                        className="product-details__rating-count"
                        style={{ marginLeft: "5px" }}
                      ></span>
                    </div>
                    <div className="product-details__price">
                      MRP: <span>{item.price}</span>
                    </div>
                    <div className="product-details__discount">
                      Discount: <span>{item.discount}</span>
                    </div>
                    <p className="product-details__stock">
                      Items left: <span>{item.quantity}</span>
                    </p>
                    <div className="product-details__delivery">
                      <p>
                        Free Delivery: <span>Oct 8 - 21</span>
                      </p>
                      <p>
                        Fastest Delivery: <span>Tomorrow 11am</span>
                      </p>
                    </div>
                    <h3 className="product-details__about-title">
                      About The Item
                    </h3>
                    <p className="product-details__about">{item.description}</p>
                    <button
                      className="product-details__add-to-cart"
                      onClick={() => handelincrement(item._id)}
                    >
                      Add to Cart
                    </button>
                  </Col>
                </>
              );
            })}
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
                <form action="">
                  <Modal.Header closeButton>
                    <Modal.Title>Write Your Review</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="modals-body">
                    {LoggeduserData.map((userdata, index) => {
                      return (
                        <>
                          <div key={index}>
                            <label htmlFor="">User Name</label>
                            <input
                              type="text"
                              value={userdata.firstname || ""}
                              placeholder="username"
                              name="username"
                              disabled
                            />
                          </div>
                        </>
                      );
                    })}
                    <div className="mt-3">
                      <label htmlFor="">Rateings</label>
                      <Select
                        options={options}
                        onChange={(e) => handleselect(e)}
                      />
                    </div>
                    <div className="mt-3">
                      <textarea
                        className="text-area"
                        name="description"
                        id=""
                        placeholder="Write here"
                        onChange={(e) => setDesc(e.target.value)}
                      ></textarea>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="success" onClick={submitReview}>
                      Add Review
                    </Button>
                  </Modal.Footer>
                </form>
              </Modal>
            </div>
          </div>
          <div className="d-flex gap-3 flex-wrap justify-content-center mt-3">
            {getReview_state.length > 0 ? (
              getReview_state?.map((item, index) => {
                return (
                  <>
                    <div>
                      <Card style={{ width: "18rem", height: "100%" }}>
                        <Card.Body>
                          <Card.Title>{item.username}</Card.Title>
                          <Card.Text>
                            <div>
                              <p>{item.description}</p>
                            </div>
                            <p>
                              {/* For showing rateing stars */}
                              <div className="product-details__ratings">
                                <span
                                  className="product-details__stars"
                                  style={{ color: "orange" }}
                                >
                                  {Array.from({ length: item.rating }).map(
                                    (ele, ind) => {
                                      return <i class="fa-solid fa-star"></i>;
                                    }
                                  )}
                                  {/* Empty Stars */}
                                  {Array.from({ length: 5 - item.rating }).map(
                                    (_, index) => (
                                      <i
                                        key={index + item.rating}
                                        className="fa-regular fa-star"
                                      ></i>
                                    )
                                  )}
                                </span>
                                <span
                                  className="product-details__rating-count"
                                  style={{ marginLeft: "5px" }}
                                ></span>
                              </div>
                            </p>
                          </Card.Text>
                          {LoggeduserData[0]?._id === item.userid ? (
                            <Button
                              variant="none"
                              onClick={() => deleteReview(item._id)}
                            >
                              <i
                                className="fa-solid fa-trash"
                                style={{ color: "red", fontSize: "22px" }}
                              ></i>
                            </Button>
                          ) : (
                            ""
                          )}
                        </Card.Body>
                      </Card>
                    </div>
                  </>
                );
              })
            ) : (
              <div className="no-reviews">
                <div className="d-flex justify-content-center gap-3">
                  <div>
                    <i
                      className="fa-solid fa-comment-dots"
                      style={{ fontSize: "50px", color: "#07c3de" }}
                    ></i>
                  </div>
                  <div>
                    <h4
                      className="text-center mt-2"
                      style={{ color: "#555", fontWeight: "bold" }}
                    >
                      No Reviews Yet!
                    </h4>
                  </div>
                </div>
                <p className="text-muted">
                  Be the first to share your experience. Click the button above
                  to write a review!
                </p>
              </div>
            )}
          </div>
        </Container>
      </section>

      <section>
            {/* get all products*/}
      <Container className="mt-4">
        <hr  className="mt-5 mb-5"/>
        <h2 className="heading">Products</h2>
        {loading ? (
          <Spiner />
        ) : (
          <Row>
            {filteredProducts?.map((item, index) => {
              return (
                <>
                  <Col md={3} sm={6} xs={6} key={index} className="mb-3 d-flex mt-4" onClick={()=>navigate(`/productsdetail/${item._id}`,{state:{ categoryid: item.categoryid }})}  style={{cursor:"pointer"}}>
                    <Card
                      style={{ width: "100%", height: "100%", border:"none"}}
                      
                    >
                      <Card.Img
                        variant="top"
                        src={`${item.productimage}`}
                        className='product-image'
                      />
                      <Card.Body className="d-flex justify-content-center align-items-center flex-column">
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
        {/* <div className="d-flex justify-content-center align-items-center">
          <Col md={2} className="mt-5 mb-5">
            <button
              className="buy-now mt-auto"
              onClick={() => navigate("/products")}
            >
              View All
            </button>
          </Col>
        </div> */}
      </Container>
      </section>
    </div>
  )
}
