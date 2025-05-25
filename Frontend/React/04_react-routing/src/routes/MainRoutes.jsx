import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Services from "../components/Services";
import Product from "../components/Product";
import ProductDetail from "../components/ProductDetail";
import ServiceDetails from "../components/ServiceDetails";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} /> // main route
      <Route path="/product/detail/:name" element={<ProductDetail />} /> //
      child route
      {/* to open child on same page  */}
      <Route path="/services" element={<Services />}>
        <Route path="/services/detail" element={<ServiceDetails />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
