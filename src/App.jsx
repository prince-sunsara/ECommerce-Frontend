import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { Navbar, Footer } from "./layouts";
import {
  AboutUs,
  Contact,
  Home,
  FAQ,
  HelpCenter,
  PrivacyPolicy,
  UserLogin,
  SellerLogin,
  UserSignUp,
  SellerSignUp,
  TermsAndConditions,
  OtpVerification,
} from "./pages";

function AppWrapper() {
  const location = useLocation();

  // List of routes where Navbar should be hidden
  const hideNavbarRoutes = [
    "/user-login",
    "/user-sign-up",
    "/seller-login",
    "/seller-sign-up",
    "/otp-verification",
  ];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && (
        <>
          <Navbar />
        </>
      )}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-sign-up" element={<UserSignUp />} />
        <Route path="/seller-login" element={<SellerLogin />} />
        <Route path="/seller-sign-up" element={<SellerSignUp />} />
        <Route path="/otp-verification" element={<OtpVerification />} />

        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<Contact />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/help-center" element={<HelpCenter />} />
      </Routes>

      {!shouldHideNavbar && (
        <>
          <Footer />
        </>
      )}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}
