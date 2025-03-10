import React from 'react'
import {Button}  from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
export default function Error() {
  const navigate = useNavigate();

  const navigateto = () =>{
      navigate("/")
  }

  return (
    <section>

    <div className='position-relative'>
          <div className='d-flex flex-column justify-content-center'> 
                <img src="/400.png" alt=""  />
          </div>
             <div style={{position:"absolute" , bottom:"10%" , left:"45%"}}>
                <Button onClick={navigateto}>Back to home</Button>
             </div>
    </div>
    </section>
  )
}
