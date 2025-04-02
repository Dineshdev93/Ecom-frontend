import React, { useEffect } from "react";
import { Row, Col, Card , Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Userverifyed } from "../../redux/slice/userAuthSlice/UserSlice";
import { GetOrderSlice } from "../../redux/slice/orderSlice/orderSlice";
const Userprofile = () => {
  const { LoggeduserData, Loginuserdata, loading } = useSelector(
    (state) => state.userauth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(Userverifyed());
  }, [Loginuserdata]);

  //  order details
 
    const {OrdersState} = useSelector((state)=> state.orders)
    
    
    // Get orders details
    useEffect(() => {
      dispatch(GetOrderSlice());
    }, [OrdersState]);

  return (
    <>
      <section className="container" style={{ marginTop: "7rem" }}>
        <Row className="justify-content-center align-items-center">
          {/* Profile Card Section */}
          <Col
            lg={7}
            md={8}
            sm={8}
            className="d-flex justify-content-center"
            style={{
              // background: "linear-gradient(135deg, #e0f7fa, #ffffff)",
              padding: "20px",
              borderRadius: "10px",
              // boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Card
              style={{
                display:"flex", justifyContent:"center",alignItems:"center",
                width: "60%",
                border: "none",
                background: "linear-gradient(135deg, #fff, #ffecb3)",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
              }}
              className="shadow-lg"
            >
              {LoggeduserData.map((item, key) => (
                <div key={key}>
                  <Card.Img
                    variant="top"
                    src={item.userprofile}
                    style={{
                      width: "200px",
                      height: "",
                      objectFit: "cover",
                      borderTopLeftRadius: "12px",
                      borderTopRightRadius: "12px",
                    }}
                  />
                  <Card.Body className="text-center">
                    <Card.Title className="fw-bold text-primary">
                      <i className="fa-solid fa-user" style={{ fontSize: "24px", color: "#673ab7" }}></i>
                      &nbsp; {item.firstname} {item.lastname}
                    </Card.Title>
                    <h5 className="text-muted">
                      <i className="fa-solid fa-envelope" style={{ color: "#673ab7" }}></i>
                      &nbsp; {item.email}
                    </h5>
                  </Card.Body>
                </div>
              ))}
            </Card>
          </Col>

          {/* Orders Section */}
          <Col
            md={5}
            className="d-flex flex-column align-items-center justify-content-center text-center"
            style={{
              background: "linear-gradient(135deg, #e1bee7, #ffffff)",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3 className="fw-bold text-dark mb-3">Total Orders: <span className="text-success">{OrdersState?.length}</span></h3>
            <Button
              variant="primary"
              className="px-4 py-2"
              style={{
                borderRadius: "8px",
                backgroundColor: "#673ab7",
                border: "none",
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#512da8")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#673ab7")}
              onClick={() => navigate("/user-orders")}
            >
              See Orders
            </Button>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Userprofile;
