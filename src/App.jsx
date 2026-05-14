// App.jsx
import './App.css';
import { Routes, Route } from "react-router-dom";

import MainLayout from "./components/MainLayout";

import Home from "./pages/homepage/HomePage";
// import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        {/* <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} /> */}
      </Route>
    </Routes>
  );
}