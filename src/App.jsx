// App.jsx
import './App.css';
import { Routes, Route } from "react-router-dom";

import MainLayout from "./components/MainLayout";

import Home from "./pages/homepage/HomePage";
import Aboutus from "./pages/About_us/About_us";
import OurServices from "./pages/Our_Services/Our_Services";
import ProductsPage from "./pages/Products/Products";
import ContactUs from "./pages/contact_us/contact_us";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="Aboutus" element={<Aboutus />} />
        <Route path="Services" element={<OurServices />} />
          <Route path="ProductsPage" element={<ProductsPage />} />
        <Route path='ContactUs' element={<ContactUs />} />
      </Route>
    </Routes>
  );
}