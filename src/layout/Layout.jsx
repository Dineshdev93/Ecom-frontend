import React, { useEffect } from 'react'
import Header from './Headers/Header'
import Footer from './Footer/Footer'
export default function Layout({children}) {
  return (
    <>
          <Header/>
             {children}
          <Footer/>
    </>
  )
}
