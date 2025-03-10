import React from 'react'
import { Container , Row , Col , Card } from 'react-bootstrap'
export default function Userorders() {
  return (
    <>
      <Container className="mt-5">
          <h5>Order id : 1236465431s3</h5>
         <Row className="justify-content-between">
          <Col md={12} className="mb-4 cart-section-left">
            <Row className="justify-content-between">
             <Card style={{width:"100%" , padding:"10px", display:"flex"}}>

              <Col md={3}>
               
                <img src="/shoes.png" width={200} alt="" />
              </Col>
              <Col md={5} className="mt-5">
                <h3>Nike Shoes</h3>
                <span>Discount</span> <br />
                <span>Addres : sadasd 2 1</span>
                <p>Price :- 200</p>
                <p>Shipping status :- 2023-10-12</p>
              </Col>
             </Card>
            </Row>
          </Col>
              <hr/>
          
        </Row>
         </Container>
    </>
  )
}
