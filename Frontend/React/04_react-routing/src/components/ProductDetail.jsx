import React from "react";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-4xl font-bold">Product Name</h1>
      <h2>Procut Details</h2>
      <button
        className="bg-purple-500 py-2 px-5 rounded-md"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  );
};

export default ProductDetail;
