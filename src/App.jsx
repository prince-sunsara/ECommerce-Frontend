import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./pages/LoginRegister/UserLogin";
import SellerLogin from "./pages/SellerRegister/SellerLogin";
import UserSignUp from "./pages/LoginRegister/UserSignUp";
import SellerSignUp from "./pages/SellerRegister/SellerSignUp";
import Navbar from "./layouts/Navbar";
import { About, AboutUs, Contact, Home, Team } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="about us" element={<AboutUs />} />
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-sign-up" element={<UserSignUp />} />
        <Route path="/seller-login" element={<SellerLogin />} />
        <Route path="/seller-sign-up" element={<SellerSignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
