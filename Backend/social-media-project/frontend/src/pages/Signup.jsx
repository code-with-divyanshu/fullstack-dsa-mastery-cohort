import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (data) => {
    try {
      setErrorMsg(""); // Clear previous errors
      await axios.post("http://localhost:3000/auth/register", data);
      alert("Registration successful");
      reset();
      navigate("/login");
    } catch (err) {
      // Try to get error message from backend response
      const message =
        err.response && err.response.data && err.response.data.message
          ? err.response.data.message
          : "Registration failed";
      setErrorMsg(message);
      reset();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-violet-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-violet-700 mb-8">
          Create New Account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {errorMsg && (
            <div className="mb-4 text-red-600 border border-red-300 bg-red-50 rounded-md p-2 text-center">
              {errorMsg}
            </div>
          )}
          <div>
            <label
              className="block mb-1 text-gray-700 font-medium"
              htmlFor="username"
            >
              Username
            </label>
            <input
              id="username"
              placeholder="Enter username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition"
              {...register("username", { required: true })}
              autoComplete="username"
            />
          </div>
          <div>
            <label
              className="block mb-1 text-gray-700 font-medium"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition"
              {...register("password", { required: true })}
              autoComplete="new-password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-white font-semibold transition text-lg shadow"
          >
            Register
          </button>
        </form>
        <div className="mt-6 text-center text-gray-500">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="font-medium text-violet-600 hover:underline"
            type="button"
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
