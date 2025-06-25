import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchUser = async () => {
    try {
      const response = await axios.post(
        "/api/v1/users/user-auth",
        {},
        { withCredentials: true }
      );

      console.log("✅ Auth API Response:", response.data);

      const userData = response?.data?.data?.user;
      console.log("Check Values:- ", userData)
      if (userData) {
        setUser(userData);
        console.log("✅ Logged-in User:", userData);
      } else {
        setUser(null);
        console.log("❌ No user found in response");
      }
    } catch (err) {
      setUser(null);
      console.error("❌ Auth check failed:", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await axios.post(
        "/api/v1/users/logout",
        {},
        { withCredentials: true }
      );
    } catch (e) {
      console.error("Logout failed:", e);
    }
    setUser(null);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, loading, error, logout, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
