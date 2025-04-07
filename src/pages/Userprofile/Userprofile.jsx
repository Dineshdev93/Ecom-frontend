import React, { useEffect } from "react";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Userverifyed } from "../../redux/slice/userAuthSlice/UserSlice";
import { GetOrderSlice } from "../../redux/slice/orderSlice/orderSlice";
import "./userProfile.scss"; // SCSS for styles

const Userprofile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { LoggeduserData, Loginuserdata } = useSelector((state) => state.userauth);
  const { OrdersState } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(Userverifyed());
  }, [Loginuserdata]);

  useEffect(() => {
    dispatch(GetOrderSlice());
  }, []);

  return (
    <Container className="user-profile-section">
      <Row className="justify-content-center align-items-center">
        {/* Profile Section */}
        <Col md={6} sm={12}>
          <Card className="profile-card">
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
                </Card.Body>
              </div>
            ))}
          </Card>
        </Col>

        {/* Order Summary Section */}
        <Col md={4} sm={10} className="mt-4 mt-md-0">
          <Card className="order-summary text-center">
            <h4>Total Orders</h4>
            <h2 className="text-success">{OrdersState?.length || 0}</h2>
            <Button
              variant="success"
              className="order-btn mt-3"
              onClick={() => navigate("/user-orders")}
            >
              View Orders
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Userprofile;
