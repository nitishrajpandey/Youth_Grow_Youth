import Navbar from "./Components/Header/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/Aboutus/About";
import OurAdvisors from "./Pages/OurAdvisors/OurAdvisors";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/LoginPage/Login";
import Registration from "./Pages/Registration/Registration";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/AboutUs" element={<About />} />
        <Route path="/OurAdvisors" element={<OurAdvisors />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/ContactUs" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
