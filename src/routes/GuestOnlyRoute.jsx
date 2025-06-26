// src/routes/GuestOnlyRoute.jsx
import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const GuestOnlyRoute = ({ children }) => {
  const { user, loading } = useUser();

  if (loading) return <div>Loading...</div>;
  
  return user ? <Navigate to="/" replace /> : children;
};

export default GuestOnlyRoute;
