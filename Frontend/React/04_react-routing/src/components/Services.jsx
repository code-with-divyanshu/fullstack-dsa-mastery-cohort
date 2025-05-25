import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">Services</h1>
      <button
        className="bg-purple-500 py-2 px-5 rounded-md"
        onClick={() => navigate("/services/detail")}
      >
        View Details
      </button>
      <hr className="my-10" />

      <Outlet />
    </div>
  );
};

export default Services;
