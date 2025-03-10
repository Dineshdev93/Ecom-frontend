import React from 'react'
import AdminSidebar from '../../components/AdminSidebar/AdminSidebar'

export default function AdminCommonlayout({children}) {
  return (
    <div>
        <AdminSidebar children={children}/>      
    </div>
  )
}
