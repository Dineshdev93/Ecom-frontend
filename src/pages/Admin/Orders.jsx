import React, { useEffect } from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from 'react-redux';
import { GetOrderSlice } from '../../redux/slice/orderSlice/orderSlice';
import Spiner from '../Loader/Spiner';
export default function Orders() {
  const {OrdersState , loading} = useSelector((state)=> state.orders)
  const dispatch = useDispatch()
   // Get orders details
    useEffect(() => {
      dispatch(GetOrderSlice());
    }, []);
  console.log("ordeeeee" , OrdersState);
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
                    {
                     loading ? <Spiner/> : OrdersState?.map((el , index)=>{
                       return(
                         <>
                           <tbody>
                      <tr>
                        <td>1</td>
                        <td>{el.totalPrice }</td>
                        <td>{el.orderItems?.length}</td>
                        <td>{el.userid                        }</td>
                        <td>{el.orderstatus}</td>
                        <td>
                            <div>
                                <i className='fa-solid fa-trash' style={{color:"red", cursor:"pointer"}}></i>
                            </div>
                        </td>
 
                      </tr>
                      
                            </tbody>   
                         </>
                       )
                     })
                    }
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
