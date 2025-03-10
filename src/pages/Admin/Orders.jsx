import React from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
import Table from "react-bootstrap/Table";
export default function Orders() {
  return (
    <div>
          <section className="mt-5">
        <Container>
          <Row>
            <Col md={12}>
              <div>
               
                <h4>Orders</h4>

                <div>
                  <Table striped bordered hover variant="dark">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Total Price</th>
                        <th>Order items</th>
                        <th>User id</th>
                        <th>Status</th>
                        <th>Action</th>

                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>1200</td>
                        <td>4</td>
                        <td>554554</td>
                        <td>Delevered</td>
                        <td>
                            <div>
                                <i className='fa-solid fa-trash' style={{color:"red", cursor:"pointer"}}></i>
                            </div>
                        </td>
 
                      </tr>
                      
                    </tbody>
                  </Table>
                </div>
              </div>
            </Col> 
         
          </Row>
        </Container>
      </section>
    </div>
  )
}
