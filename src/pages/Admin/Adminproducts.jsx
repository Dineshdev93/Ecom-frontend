import React, { useEffect, useState } from 'react'
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from 'react-redux';
import "./admin.scss";
import Select from 'react-select'
import { deltedProduct, getAddedproducts } from '../../redux/slice/adminproductSlice/adminproductSlice';
export default function Adminproducts() {
  
  // const options = [
  //   { value: 'chocolate', label: 'Chocolate' },
  //   { value: 'strawberry', label: 'Strawberry' },
  //   { value: 'vanilla', label: 'Vanilla' }
  // ]
  // For pagination functionlity
  const [page ,setPage] = useState(1)
  const [pagecount , setPagecount] = useState(0)
  //  get response by redux slice
  const productdata = useSelector((state)=>state.products.getProductsbyadmin) 
  
    
    
  //  disptach function
  const dispatch = useDispatch()

  const productapi = () =>{  
    const data = {
        page
    }
    dispatch( getAddedproducts(data)).then((res)=>{
        setPagecount(res.payload.Pagination.pageCount)
    })
  }
  useEffect(()=>{
    productapi()
  },[page])

  const handlenextpage = () =>{
    if (page < pagecount) {
     return setPage(page + 1);
    }
  }
  const handleprevpage = () =>{
      if(page >= pagecount){
        return setPage(page-1);
      }
  }


  // delete functionlity of Products
  const deleteitem = (productid) =>{
     dispatch(deltedProduct(productid))
     productapi();
  }

  return (
   <>
    <div className="admin-get-products">
      <Container className="mt-4">
        {/* <Row>
           <Col md={8}>
              <h2>All Products</h2>
           </Col>
           <Col md={4}>
               <Select options={options} placeholder="Filter by Category"/>
           </Col>
        </Row> */}
        <Row className='childs gap-5'>
          {productdata.map((element) => {
            return (
              <>
              {
                element.getAllProducts.map((data,key)=>{
                   return(
                    <>
                        <Col md={2} className="mb-3">
                  <Card style={{ width: "", height: "" }}>
                    <Card.Img variant="top" src={`${data.productimage}`} style={{ height: "200px", width: "100%", objectFit: "cover" }}/>
                    <Card.Body>
                      <Card.Title>{data.productname}</Card.Title>
                      <i className='fa-solid fa-trash' onClick={()=>deleteitem(data._id)} style={{color:"red",fontSize:"25px",cursor:"pointer"}}></i>
                    </Card.Body>
                  </Card>
                </Col>
                    </>
                   )
                })
              }      
              </>
            );
          })}
        </Row>
        {/* Pagination Controls */}
      <div className="mt-4 mb-4 d-flex justify-content-end align-items-end next-previious-icon">
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
      </div>
      </Container>
    </div>
   </>
  )
}


