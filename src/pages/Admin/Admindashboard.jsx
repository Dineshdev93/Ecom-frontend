import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Table from "react-bootstrap/Table";
export default function Admindashboard() {
  return (
    <>
      <section>
        <Container>
          <Row className="mt-5 ">
            <Col md={3}>
              <Card className="p-2" style={{ width: "18rem" }}>
                <div className="d-flex justify-content-around">
                  <div>
                    <h5>Toatl Orders</h5>
                    <h2>4</h2>
                    <div className="d-flex gap-4 align-items-center">
                      <i style={{ color: "#68b2b3" }} class="fas fa-circle"></i>
                      <div>up from yesterday</div>
                    </div>
                  </div>
                  <div>
                    <i
                      class="fa-solid fa-stop"
                      style={{ color: "Highlight", fontSize: "50px" }}
                    ></i>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="p-2" style={{ width: "18rem" }}>
                <div className="d-flex justify-content-around">
                  <div>
                    <h5>Toatl Products</h5>
                    <h2>5</h2>
                    <div className="d-flex gap-4 align-items-center">
                      <i style={{ color: "#68b2b3" }} class="fas fa-circle"></i>
                      <div>up from yesterday</div>
                    </div>
                  </div>
                  <div>
                    <i
                      class="fa-solid fa-stop"
                      style={{ color: "#ffb30096", fontSize: "50px" }}
                    ></i>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="p-2" style={{ width: "18rem" }}>
                <div className="d-flex justify-content-around">
                  <div>
                    <h5>Users</h5>
                    <h2>3</h2>
                    <div className="d-flex gap-4 align-items-center">
                      <i style={{ color: "#68b2b3" }} class="fas fa-circle"></i>
                      <div>up from yesterday</div>
                    </div>
                  </div>
                  <div>
                    <i
                      class="fa-solid fa-stop"
                      style={{ color: "#a8cba8", fontSize: "50px" }}
                    ></i>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="p-2" style={{ width: "18rem" }}>
                <div className="d-flex justify-content-around">
                  <div>
                    <h5>Toatl Returns</h5>
                    <h2>11,232</h2>
                    <div className="d-flex gap-4 align-items-center">
                      <i
                        style={{ color: "rgb(239 95 95)" }}
                        class="fas fa-circle"
                      ></i>
                      <div>Down from yesterday</div>
                    </div>
                  </div>
                  <div>
                    <i
                      class="fa-solid fa-stop"
                      style={{ color: "pink", fontSize: "50px" }}
                    ></i>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="mt-5">
        <Container>
          <Row>
            <Col md={8}>
              <div>
                <h3>Recent Sales</h3>
                <h4>Users</h4>

                <div>
                  <Table striped bordered hover variant="dark">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Profile</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>@gmaul.com</td>
                        <td><img src="" alt="img" /></td>
                        <td>Dropdown</td>
                      </tr>
                      <tr>
                      <td>1</td>
                        <td>Mark</td>
                        <td>@gmaul.com</td>
                        <td><img src="" alt="img" /></td>
                        <td>Dropdown</td>
                      </tr>
                      <tr>
                      <td>1</td>
                        <td>Mark</td>
                        <td>@gmaul.com</td>
                        <td><img src="" alt="img" /></td>
                        <td>Dropdown</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </Col> 
            <Col md={4} className="mt-5">
                <Card className="p-2">
                     <h4 className="text-center">Top Selling Products</h4>
                    <div className="d-flex justify-content-around align-items-center">
                      <div>
                        <img src="/shoes.png" width={50} alt="" />&nbsp;
                        Nike Shoes
                      </div>
                      <div>
                           Rs. 2000
                      </div>
                    </div>
                    <div className="d-flex justify-content-around align-items-center">
                      <div>
                        <img src="/shoes.png" width={50} alt="" />&nbsp;
                        Nike Shoes
                      </div>
                      <div>
                           Rs. 2000
                      </div>
                    </div>
                    <div className="d-flex justify-content-around align-items-center">
                      <div>
                        <img src="/shoes.png" width={50} alt="" />&nbsp;
                        Nike Shoes
                      </div>
                      <div>
                           Rs. 2000
                      </div>
                    </div>
                </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
