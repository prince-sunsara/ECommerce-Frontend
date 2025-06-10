import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./layouts/Navbar";
import { About, AboutUs, Contact, Home, Team } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="about us" element={<AboutUs />} />
            <Route path="team" element={<Team />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
