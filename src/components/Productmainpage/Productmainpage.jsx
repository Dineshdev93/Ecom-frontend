import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import "../Homeproduct/homeproduct.scss";
import Select from 'react-select'
import Spiner from "../../pages/Loader/Spiner";
export default function Productmainpage({productdata}) {

  // console.log(productdata[0].Pagination.pageCount);
  //  const [page ,setPage] = useState(1)
  // const handlenextpage = () =>{
  //   if (page < pagecount) {
  //    return setPage(page + 1);
  //   }
  // }
  // const handleprevpage = () =>{
  //     if(page >= pagecount){
  //       return setPage(page-1);
  //     }
  // }



  const data = [1, 2, 3, 4, 5, 6, 7, 8];

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  return (
    <div className="home-product">
      <Container className="mt-4">
        <Row>
           <Col md={8}>
              <h2>All Products</h2>
           </Col>
           <Col md={4}>
               <Select options={options} placeholder="Filter by Category"/>
           </Col>
        </Row>
        <Row>
          { productdata[0].getAllProducts.length < 0 ? <Spiner/> : 
          productdata[0].getAllProducts?.map((element, index) => {
            return (
              <>
                <Col md={4} className="mb-3"key={index}>
                  <Card style={{ width: "100%", height: "100%" }}>
                    <Card.Img variant="top"src={`${element.productimage}`} />
                    <Card.Body >
                      <Card.Title>{element.productname}</Card.Title>
                      <button className="buy-now">Add to Cart</button>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            );
          })
          }

         {/* Pagination Controls */}
      {/* <div className="mt-4 mb-4 d-flex justify-content-end align-items-end next-previious-icon">
        <span
          className="icon me-2"
          onClick={handleprevpage}
          style={{ cursor: "pointer" }}
        >
           <i className='fa-solid fa-angle-double-left'></i>
          
        </span>
        <span className="mx-2" style={{ color: "rgb(139 40 40)" }}>
          Page {page} of {pagecount}
        </span>
        <span
          className="icon"
          onClick={handlenextpage}
          style={{ cursor: "pointer" }}
        >
           <i className='fa-solid fa-angle-double-right'></i>
        </span>
      </div> */}

        </Row>
      </Container>
    </div>
  );
}
