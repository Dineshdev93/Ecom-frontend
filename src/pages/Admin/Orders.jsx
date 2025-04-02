import React, { useEffect } from 'react'
import { Container, Row, Col, Card , Dropdown, DropdownMenu, DropdownItem } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from 'react-redux';
import { adminOrderapi, OrderStatusSlice} from '../../redux/slice/orderSlice/orderSlice';
import Spiner from '../Loader/Spiner';
export default function Orders() {
  
  const dispatch = useDispatch()
  const {adminOrderState , loading ,OrderStatuschange} = useSelector((state)=>state.orders)
  
  // handle order status by admin
  const handleOrderStaus = (orderStatus , orderid) =>{
    const finaldata = {
      orderStatus , 
      orderid
    }
     dispatch(OrderStatusSlice(finaldata))
  }

  const Adminorders = () =>{
     dispatch(adminOrderapi())
  }

  useEffect(()=>{
    Adminorders()
  },[OrderStatuschange])

  

  console.log("orders data" , adminOrderState);

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
                     loading ? <Spiner/> : adminOrderState?.map((el , index)=>{
                       return(
                         <>
                           <tbody>
                      <tr>
                        <td>{index+1}</td>
                        <td>{el.totalPrice }</td>
                        <td>{el.orderItems?.length}</td>
                        <td>{el.userid                        }</td>
                        <td>
                          {
                          el.orderstatus === "Processing" ? 
                          <Dropdown>
                            <Dropdown.Toggle id='dropdown-basic'>
                                 {el.orderstatus}
                             </Dropdown.Toggle> 
                                 <DropdownMenu>
                                   <DropdownItem onClick={()=>handleOrderStaus("Confirmed" , el._id)}>
                                        Confirmed
                                   </DropdownItem>
                                 </DropdownMenu>
                              </Dropdown> :
                               el.orderstatus === "Confirmed" ? 
                          <Dropdown>
                            <Dropdown.Toggle id='dropdown-basic'>
                                 {el.orderstatus}
                             </Dropdown.Toggle> 
                                 <DropdownMenu>
                                   <DropdownItem onClick={()=>handleOrderStaus("Shipped" , el._id)}>
                                        Shipped
                                   </DropdownItem>
                                 </DropdownMenu>
                              </Dropdown> : 
                              el.orderstatus === "Shipped" ? 
                              <Dropdown>
                                <Dropdown.Toggle id='dropdown-basic'>
                                     {el.orderstatus}
                                 </Dropdown.Toggle> 
                                     <DropdownMenu>
    
                                       <DropdownItem onClick={()=>handleOrderStaus("Delivered" , el._id)}>
                                         Delivered
                                       </DropdownItem>
                                     </DropdownMenu>
                                  </Dropdown> : <span style={{color:"yellowgreen" , fontWeight:"500" , fontSize:"19px" ,letterSpacing:"1px"}} >Delivered</span>
                          }
                          </td>
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
