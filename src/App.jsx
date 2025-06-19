import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router";
import { Navbar, Footer } from "./layouts";
import {
  AboutUs,
  Contact,
  Home,
  FAQSection,
  HelpCenter,
  PrivacyPolicy,
  UserLogin,
  SellerLogin,
  UserSignUp,
  SellerSignUp,
  TermsAndConditions,
  OtpVerification,
  Error,
  Settings,
} from "./pages";
import { AuthProvider } from "./context/AuthContext.jsx";

function AppWrapper() {
  const location = useLocation();

  // List of routes where Navbar should be hidden
  const hideNavbarRoutes = [
    "/user-login",
    "/user-sign-up",
    "/seller-login",
    "/seller-sign-up",
    "/otp-verification",
    "/404",
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
        <Route path="/settings" element={<Settings />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/faq" element={<FAQSection />} />
        <Route path="/help-center" element={<HelpCenter />} />

        <Route path="/404" element={<Error />} />

        {/* Redirect unknown routes to 404 */}
        <Route path="*" element={<Navigate to="/404" />} />
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
      <AuthProvider>
        <AppWrapper />
      </AuthProvider>
    </BrowserRouter>
  );
}
