import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

// 1. Create Context
const AuthContext = createContext(null); // Good practice to provide a default value (e.g., null)

// 2. Create Provider Component
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // simulate login - keep as true for now as per your code, but consider making it false by default in a real app
  const navigate = useNavigate(); // Initialize useNavigate here

  const logout = () => {
    // Add your actual logout logic here (e.g., clearing tokens from localStorage, making API calls)
    setIsLoggedIn(false);
    console.log("Logged out successfully");
    navigate("/"); // <-- Add this line to redirect to the home page
  };

  const login = () => {
    // Add login logic here
    setIsLoggedIn(true);
    // You might also navigate after successful login, e.g., navigate('/dashboard');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. Custom Hook for Easy Access
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
