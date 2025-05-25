import { useNavigate } from "react-router-dom";

const ServiceDetails = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">More Services</h1>
      <h2 className="text-xl font-semibold text-gray-500 mb-3">Choose Us...</h2>
      <button
        className="bg-purple-500 py-2 px-5 rounded-md"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  );
};

export default ServiceDetails;
