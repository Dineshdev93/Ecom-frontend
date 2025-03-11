import React, { useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Userverifyed } from "../../redux/slice/userAuthSlice/UserSlice";
const Userprofile = () => {
  const { LoggeduserData, Loginuserdata, loading } = useSelector(
    (state) => state.userauth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Userverifyed());
  }, [Loginuserdata]);

  console.log(LoggeduserData);

  return (
    <>
      <section className="container mt-5">
        <Row className="justify-content-center align-items-center" style={{backgroundColor:"lightcyan",padding:"10px"}}>
          <Col lg={8} md={8} sm={8} className="d-flex justify-content-center">
            <Card style={{ width: "40%",border:"none" , backgroundColor:"lightyellow" }} className="shadow">
              {LoggeduserData.map((item, key) => {
                return (
                  <>
                    <Card.Img
                      variant="top"
                      src={`${item.userprofile}`}
                      style={{ width: "100%" }}
                    />
                    <Card.Body className="text-center">
                      <Card.Title>
                        <i
                          class="fa-solid fa-person"
                          style={{ fontSize: "28px", color: "violet" }}
                        ></i>
                        &nbsp;{item.firstname}
                        &nbsp; {item.lastname}
                      </Card.Title>
                      <h5>
                        <i
                          class="fa-solid fa-envelope"
                          style={{ color: "blueviolet" }}
                        ></i>
                        &nbsp;{item.email}
                      </h5>
                    </Card.Body>
                  </>
                );
              })}
            </Card>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Userprofile;
