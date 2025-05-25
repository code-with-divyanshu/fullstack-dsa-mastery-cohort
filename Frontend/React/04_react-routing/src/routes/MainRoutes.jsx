import { Route, Routes } from "react-router-dom";

import Home from "../components/Home";
import About from "../components/About";
import Services from "../components/Services";
import Product from "../components/Product";
import ProductDetail from "../components/ProductDetail";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/product" element={<Product />} /> // main route
      <Route path="/product/detail" element={<ProductDetail />} />
    </Routes>
  );
};

export default MainRoutes;
