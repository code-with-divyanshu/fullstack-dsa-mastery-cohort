import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetail = () => {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">{params.name}</h1>
      <h2 className="text-xl font-semibold text-gray-500 mb-3">
        Prodcut Details...
      </h2>
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
