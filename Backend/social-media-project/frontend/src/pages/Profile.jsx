import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../features/posts/authSlice";
import axios from "axios";
import { motion } from "framer-motion";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:3000/auth/logout", {
        withCredentials: true,
      });
      dispatch(logout());
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-violet-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
        className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 flex flex-col items-center gap-6 w-full max-w-sm sm:max-w-md hover:shadow-purple-400/50 transition-shadow duration-300"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="rounded-full bg-violet-100 p-4"
        >
          <FaUserCircle className="text-7xl text-violet-500" />
        </motion.div>

        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Welcome,{" "}
          <span className="capitalize text-fuchsia-700">{user?.username}</span>
        </h2>

        <p className="text-gray-500 text-center">
          You are logged in. Manage your account or logout below.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-semibold transition"
        >
          <FaSignOutAlt /> Logout
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Profile;
