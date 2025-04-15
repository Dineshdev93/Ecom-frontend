import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";

export const UserPrivateroute = () => {
  const isauthenticated = localStorage.getItem("user-token");

  useEffect(() => {
    if (!isauthenticated) {
      toast.error("Please login first!", );
      }
  }, [isauthenticated]);

  return isauthenticated ? <Outlet /> : <Navigate to="/" />;
};

