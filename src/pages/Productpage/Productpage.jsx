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

  console.log("productdata" , productdata);
  console.log("categorydata" , category_data);
  
  

  return (
    <div className="home-product" style={{marginTop:"7rem"}}>
      <Container className="mt-4">
        <Row>
          <Col md={8}>
            <h2>All Products</h2>
          </Col>
          {/* <Col md={4}>
            <Select
              options={categoryState}
              onChange={(e) => setSelectedCategory(e.value)}
              placeholder="Filter by Category"
            />
          </Col> */}
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
                        <Col md={3} sm={6} xs={6} className="mb-3"  onClick={() => navigate(`/productsdetail/${data._id}`,{state:{ categoryid: data.categoryid }})}style={{cursor:"pointer"}}>
                          <Card style={{ width: "100%", height: "100%" }}>
                            <Card.Img
                              variant="top"
                              src={`${data.productimage}`}
                              className="product-image"
                            />
                            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                              <Card.Title>{data.productname}</Card.Title>
                              <div
                              style={{ fontWeight: "600" }}
                              className="d-flex gap-3"
                            >
                              <div>Rs {data.price}</div>
                              <div className="discount">-{data.discount}%</div>
                            </div>
                              {/* <div style={{textAlign:"center" , backgroundColor:"#535353" , cursor:"pointer" , padding:"7px" , borderRadius:"3rem"}}
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
                              </div> */}
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
<div className="d-flex justify-content-center align-items-center my-4">
  <nav aria-label="Page navigation">
    <ul className="pagination mb-0">
      <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
        <button className="page-link rounded-pill shadow-sm" onClick={handleprevpage}>
          <i className="fa-solid fa-angle-double-left"></i>
        </button>
      </li>
      <li className="page-item disabled">
        <span className="page-link bg-white text-dark border-0 fw-semibold" style={{border:"none" , color:"#007bff" , backgroundColor:"#f1f1f1",transition:"all 0.3s ease"}}>
          Page {page} of {pagecount}
        </span>
      </li>
      <li className={`page-item ${page === pagecount ? 'disabled' : ''}`}>
        <button className="page-link rounded-pill shadow-sm" onClick={handlenextpage}>
          <i className="fa-solid fa-angle-double-right"></i>
        </button>
      </li>
    </ul>
  </nav>
</div>

      </Container>
    </div>
  );
}
