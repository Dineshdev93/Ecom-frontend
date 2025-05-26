import React, { useEffect } from "react";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Userverifyed } from "../../redux/slice/userAuthSlice/UserSlice";
import { GetOrderSlice } from "../../redux/slice/orderSlice/orderSlice";
import "./userProfile.scss";

const Userprofile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { LoggeduserData, Loginuserdata } = useSelector((state) => state.userauth);
  const { OrdersState } = useSelector((state) => state.orders);

  console.log("LoggeduserData" , LoggeduserData);
  

  useEffect(() => {
    dispatch(Userverifyed());
  }, [Loginuserdata]);

  useEffect(() => {
    dispatch(GetOrderSlice());
  }, []);

  const wishlistCount = 5; // Assume this comes from redux/store in future

  return (
    <Container className="user-profile-section">
      <Row className="justify-content-center align-items-start">
        {/* Profile Section */}
        <Col lg={6} md={12}>
          <Card className="profile-card">

           <div onClick={()=>navigate(`/edituser/${LoggeduserData[0]._id}`)}>
             <i class="fa-regular fa-pen-to-square" style={{fontSize:"20px", cursor:"pointer"}}></i>
           </div>

            {LoggeduserData.map((item, key) => (
              <div key={key} className="text-center">
                <Card.Img
                  variant="top"
                  src={item.userprofile}
                  className="profile-img"
                />
                <Card.Body>
                  <Card.Title className="username">
                    <i className="fa-solid fa-user"></i> {item.firstname} {item.lastname}
                  </Card.Title>
                  <p className="user-email">
                    <i className="fa-solid fa-envelope"></i> {item.email}
                  </p>
                  <p className="user-phone">
                    <i className="fa-solid fa-phone"></i> +91-XXXXXXXXXX
                  </p>
                  <p className="user-address">
                    <i className="fa-solid fa-location-dot"></i> 123, New Delhi, India
                  </p>
                  {/* <div className="d-flex justify-content-center gap-3 mt-3 flex-wrap">
                    <Button variant="outline-primary" onClick={() => navigate("/edit-profile")}>
                      Edit Profile
                    </Button>
                    <Button variant="outline-danger" onClick={() => navigate("/logout")}>
                      Logout
                    </Button>
                  </div> */}
                </Card.Body>
              </div>
            ))}

               {/* Right Side Panel */}
        <Col lg={12} md={12} className="mt-4 mt-lg-0 ">
           <div className="d-flex flex-column justify-content-center align-items-center">
 
            <h4>Total Orders</h4>
            <h2 className="text-success">{OrdersState?.length || 0}</h2>
            <Button
              variant="success"
              className="order-btn mt-3"
              onClick={() => navigate("/user-orders")}
            >
              View Orders
            </Button>
           </div>
       
        </Col>
          </Card>
        
        </Col>

       
      </Row>
    </Container>
  );
};

export default Userprofile;
