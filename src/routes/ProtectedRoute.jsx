// src/routes/ProtectedRoute.jsx
import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "../context/UserContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useUser();
  const location = useLocation();

  if (loading) return <div>Loading...</div>;

  // ❌ If no user, redirect to login
  if (!user) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  // ✅ If user exists, allow access
  return children;
};

export default ProtectedRoute;
