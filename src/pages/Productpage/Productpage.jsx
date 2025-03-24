import React from "react";
import Productmainpage from "../../components/Productmainpage/Productmainpage";
import { useDispatch, useSelector } from "react-redux";
import {
  categorydata,
  getAddedproducts,
} from "../../redux/slice/adminproductSlice/adminproductSlice";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
// import "../Homeproduct/homeproduct.scss";
import Select from "react-select";
import Spiner from "../../pages/Loader/Spiner";
import { NavLink ,useNavigate } from "react-router-dom";
export default function Productpage() {
  const [page, setPage] = useState(1);
  const [pagecount, setPagecount] = useState(0);
  //  get response by redux slice
  const productdata = useSelector((state) => state.products.getProductsbyadmin);
  const { loading } = useSelector((state) => state.products);
  const category_data = useSelector((state) => state.products.category_data);
  const [categoryState, setCategorystate] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  //  disptach function
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const productapi = () => {
    const data = {
      selectedCategory,
      page,
    };
    dispatch(getAddedproducts(data)).then((res) => {
      setPagecount(res.payload.Pagination.pageCount);
    });
  };
  useEffect(() => {
    productapi();
  }, [page, selectedCategory]);

  const handlenextpage = () => {
    if (page < pagecount) {
      return setPage(page + 1);
    }
  };
  const handleprevpage = () => {
    if (page >= pagecount) {
      return setPage(page - 1);
    }
  };

  // get category data p[rocess]

  useEffect(() => {
    dispatch(categorydata());
  }, []);
  useEffect(() => {
    let arr = [{ value: "all", label: "all" }];
    for (let i = 0; i < category_data.length; i++) {
      arr.push({
        value: category_data[i]._id,
        label: category_data[i].categoryname,
      });
    }
    setCategorystate(arr);
  }, [category_data]);

  return (
    <div className="home-product" style={{marginTop:"7rem"}}>
      <Container className="mt-4">
        <Row>
          <Col md={8}>
            <h2>All Products</h2>
          </Col>
          <Col md={4}>
            <Select
              options={categoryState}
              onChange={(e) => setSelectedCategory(e.value)}
              placeholder="Filter by Category"
            />
          </Col>
        </Row>
        <Row className="childs gap-0">
          {loading ? (
            <Spiner />
          ) : (
            productdata.map((element) => {
              return (
                <>
                  {element.getAllProducts.map((data, key) => {
                    return (
                      <>
                        <Col md={3} className="mb-3">
                          <Card style={{ width: "100%", height: "100%" }}>
                            <Card.Img
                              variant="top"
                              src={`${data.productimage}`}
                              style={{ height: "250px", width: "100%" }}
                            />
                            <Card.Body>
                              <Card.Title>{data.productname}</Card.Title>
                              <div style={{textAlign:"center" , backgroundColor:"#535353" , cursor:"pointer" , padding:"7px" , borderRadius:"3rem"}}
                                onClick={()=>navigate(`/productsdetail/${data._id}`)} 
                              >

                              <NavLink
                                style={{
                                  textDecoration: "none",
                                  width:"100%",
                                  textAlign:"center",
                                  color:"white",
                                  fontWeight:"600"
                                }}
                                to={`/productsdetail/${data._id}`}
                              >
                                Buy Now
                              </NavLink>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      </>
                    );
                  })}
                </>
              );
            })
          )}
        </Row>

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
            Page {page} of {pagecount}
          </span>
          <span
            className="icon"
            onClick={handlenextpage}
            style={{ cursor: "pointer" }}
          >
            <i className="fa-solid fa-angle-double-right"></i>
          </span>
        </div>
      </Container>
    </div>
  );
}
