import React from "react";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();

  const navigatorHandler = (name) => {
    navigate(`/product/detail/${name}`);
  };

  // child navigation

  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">Proudcts</h1>
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Product 1</h2>
        <button
          className="bg-purple-500 py-2 px-5 rounded-md"
          onClick={() => navigatorHandler("Product 1")}
        >
          See Details
        </button>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Product 2</h2>
        <button
          className="bg-purple-500 py-2 px-5 rounded-md"
          onClick={() => navigatorHandler("Product 2")}
        >
          See Details
        </button>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Product 3</h2>
        <button
          className="bg-purple-500 py-2 px-5 rounded-md"
          onClick={() => navigatorHandler("Product 3")}
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default Product;
