import React from 'react'
import Productmainpage from '../../components/Productmainpage/Productmainpage'
import { useDispatch,useSelector } from 'react-redux'
import { getAddedproducts } from '../../redux/slice/adminproductSlice/adminproductSlice'
import { useState,useEffect } from 'react'
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
// import "../Homeproduct/homeproduct.scss";
import Select from 'react-select'
import Spiner from "../../pages/Loader/Spiner";
export default function Productpage() {
  const [page ,setPage] = useState(1)
    const [pagecount , setPagecount] = useState(0)
    //  get response by redux slice
    const productdata = useSelector((state)=>state.products.getProductsbyadmin) 
    const {loading} = useSelector((state)=>state.products) 
    
      
      
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
        <Row className='childs gap-0'>
          { loading ? <Spiner/> : productdata.map((element) => {
            return (
              <>
              {
                element.getAllProducts.map((data,key)=>{
                   return(
                    <>
                <Col md={3} className="mb-3">
                  <Card style={{ width: "100%", height: "100%" }}>
                    <Card.Img variant="top" src={`${data.productimage}`} style={{ height: "250px", width: "100%"}}/>
                    <Card.Body>
                      <Card.Title>{data.productname}</Card.Title>
                      
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
        <span className="mx-2" style={{ color: "rgb(114 158 199)" , fontWeight:"600"}}>
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
  )
}
