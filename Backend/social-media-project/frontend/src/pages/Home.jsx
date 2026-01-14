import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaRobot, FaUsers, FaUpload, FaCommentDots } from "react-icons/fa";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { HiOutlineSparkles } from "react-icons/hi";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-700 text-white relative overflow-hidden pt-40">
        {/* Glow effect */}
        <div className="absolute top-20 right-40 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-30" />

        <motion.h1
          className="text-6xl font-extrabold mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Welcome to <span className="text-yellow-300">Insta Muze</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-10 max-w-3xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          Share your world in seconds – upload photos, let AI craft captions,
          and connect with a global creative community.
        </motion.p>

        <motion.div
          className="flex gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <Link
            to="/signup"
            className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-yellow-300 transition transform hover:scale-105"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold shadow hover:bg-gray-200 transition transform hover:scale-105"
          >
            Login
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center mb-14 text-gray-800">
          Why Choose Insta Muze?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            {
              icon: <FaRobot size={40} className="text-blue-600" />,
              title: "AI-Powered Captions",
              desc: "Upload any photo and get engaging captions generated instantly by AI.",
            },
            {
              icon: <FaUsers size={40} className="text-indigo-600" />,
              title: "Community Feed",
              desc: "Scroll through posts from users worldwide and get inspired.",
            },
            {
              icon: <HiOutlineSparkles size={40} className="text-purple-600" />,
              title: "Personalized Profiles",
              desc: "Manage your posts, showcase your creativity, and build your audience.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="p-8 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl text-center"
              whileHover={{ y: -5, scale: 1.03 }}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-14 text-gray-800">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto">
          {[
            {
              step: "Upload Your Photo",
              icon: (
                <MdOutlinePhotoCamera size={35} className="text-blue-600" />
              ),
            },
            {
              step: "AI Generates Caption",
              icon: <FaRobot size={35} className="text-indigo-600" />,
            },
            {
              step: "Post & Share",
              icon: <FaUpload size={35} className="text-green-600" />,
            },
            {
              step: "Engage & Connect",
              icon: <FaCommentDots size={35} className="text-pink-600" />,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex-1 p-8 bg-white rounded-2xl shadow text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3 }}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold">{item.step}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-indigo-700 to-purple-700 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Share Your Story?</h2>
        <p className="mb-8 text-lg">
          Join Insta Muze today and be part of the fastest growing creative
          community.
        </p>
        <Link
          to="/signup"
          className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-xl font-semibold shadow hover:bg-yellow-300 transition transform hover:scale-105"
        >
          Join Now
        </Link>
      </section>
    </div>
  );
};

export default Home;
