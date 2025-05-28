import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
export default function GoogleAuthSuccess() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const token = query.get("token");

    if (token) {
      localStorage.setItem("user-token", token);
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [location, navigate]);
  return <div className='text-center'> Logging in with Google...</div>;
}
