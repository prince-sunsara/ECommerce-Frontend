import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./pages/LoginRegister/UserLogin";
import SellerLogin from "./pages/SellerRegister/SellerLogin";
import UserSignUp from "./pages/LoginRegister/UserSignUp";
import SellerSignUp from "./pages/SellerRegister/SellerSignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-sign-up" element={<UserSignUp />} />
        <Route path="/seller-login" element={<SellerLogin />} />
        <Route path="/seller-sign-up" element={<SellerSignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
