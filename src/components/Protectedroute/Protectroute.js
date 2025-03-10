import React from 'react'
import {Outlet , Navigate}  from 'react-router-dom'
export default function Protectroute() {
    const token = localStorage.getItem("admin-token");  // Token check karo
    return token ? <Outlet /> : <Navigate to="/admin/admin-login" replace />;
}
