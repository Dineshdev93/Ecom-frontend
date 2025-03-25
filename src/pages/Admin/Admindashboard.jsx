import React, {  useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { GetAllUser } from "../../redux/slice/userAuthSlice/UserSlice";
import {useDispatch , useSelector}   from "react-redux"
import { getAddedproducts } from "../../redux/slice/adminproductSlice/adminproductSlice";
export default function Admindashboard() {

  const [page, setPage] = useState(1);
  const [pageCount , setPageCount] = useState(0)

  const dispatch = useDispatch();
  const {userData} = useSelector((state)=>state.userauth)
  const productdata = useSelector((state) => state.products.getProductsbyadmin);


  console.log("productdata" , userData);
  

  const data = {
    page 
  }

  // prdduct data detaisl
  const productapi = () => {
    dispatch(getAddedproducts(data)).then((res) => {
      // setPagecount(res.payload.Pagination.pageCount);
    });
  };
  
  const getAlluserapi = () =>{
    dispatch(GetAllUser(data)).then((res)=>{
        if(res.payload){
           setPageCount(res.payload.Pagination.pageCount);
        }
    })
  }

  useEffect(()=>{
      productapi();
      getAlluserapi()
  },[page])


  // for pagination
  const handlenextpage = () => {
    if (page < pageCount) {
      return setPage(page + 1);
    }
  };
  const handleprevpage = () => {
    if (page >= pageCount) {
      return setPage(page - 1);
    }
  };

  console.log(userData);
  

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
                    <h2>{productdata[0]?.Pagination?.totalProducts}</h2>
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
                    <h2>{userData[0]?.Pagination?.count}</h2>
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
                      {
                        userData[0]?.usersdata?.length === 0 ? <h1>No user Found</h1> :
                        userData[0]?.usersdata?.map((el , index)=>{
                           return(
                              <>
                      <tr>
                        <td>{index+1+(page-1)*4}</td>
                        <td>{el.firstname}</td>
                        <td>{el.email}</td>
                        <td><img src={`${el.userprofile}`} width={40} alt="img" /></td>
                        <td style={{textAlign:"center" , color:"#ff6681" , fontSize:"26px"}} ><i  className="fa-solid fa-trash"></i></td>
                      </tr>
                      <tr>
                      </tr>
                                 
                              </>
                           )
                        })
                      }
                    </tbody>
                  </Table>
                  {/* Pagination Controls */}
                  <div className="mt-4 mb-4 d-flex justify-content-end align-items-end next-previious-icon">
          <span
            className="icon me-2"
            onClick={handleprevpage}
            style={{ cursor: "pointer" }}
          >
            <i className="fa-solid fa-angle-double-left"></i>
          </span>
          <span
            className="mx-2"
            style={{ color: "rgb(114 158 199)", fontWeight: "600" }}
          >
            Page {page} of {pageCount}
          </span>
          <span
            className="icon"
            onClick={handlenextpage}
            style={{ cursor: "pointer" }}
          >
            <i className="fa-solid fa-angle-double-right"></i>
          </span>
                    </div>
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
                </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
