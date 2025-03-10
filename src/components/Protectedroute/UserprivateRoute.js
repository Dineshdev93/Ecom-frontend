import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import {useSelector , useDispatch}  from 'react-redux'
import { Userverifyed } from "../../redux/slice/userAuthSlice/UserSlice";
import { useEffect } from "react";
export const UserPrivateroute = ()=>{
     const {LoggeduserData} = useSelector((state)=>state.userauth)
        const dispatch = useDispatch();
        useEffect(()=>{
           dispatch(Userverifyed());
        },[])
    const isauthenticated = LoggeduserData.length > 0 ;
    return isauthenticated ? <Outlet/> : <Navigate to={'/login'} />
}