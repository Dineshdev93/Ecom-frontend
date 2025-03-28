import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Userverifyed } from "../../redux/slice/userAuthSlice/UserSlice";
import { useEffect } from "react";
export const UserPrivateroute = () => {
  

  const isauthenticated = localStorage.getItem("user-token");
  return isauthenticated ? <Outlet /> : <Navigate to={"/"} />;
};
