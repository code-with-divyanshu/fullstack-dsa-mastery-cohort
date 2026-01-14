import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage("⚠️ Please select a file first");
      return;
    }

    const formData = new FormData();
    formData.append("image", file); // 👈 backend field ka naam

    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:3000/api/posts/create",
        formData,
        { withCredentials: true }
      );

      console.log("Response:", res.data);
      setMessage("✅ Uploaded successfully!");

      // Redirect to all posts after 1s
      setTimeout(() => navigate("/my-posts"), 1000);
    } catch (err) {
      console.error("❌ Error:", err.response?.data || err.message);
      setMessage("❌ Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-6 flex flex-col gap-4 w-full max-w-md"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Create Post
        </h2>

        <motion.input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="border p-2 rounded"
          whileFocus={{ scale: 1.02 }}
        />

        {preview && (
          <motion.img
            src={preview}
            alt="preview"
            className="w-full h-60 object-cover rounded-lg shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          />
        )}

        <motion.button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {loading ? "Uploading..." : "Upload"}
        </motion.button>

        {message && (
          <motion.p
            className="text-center text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {message}
          </motion.p>
        )}
      </motion.form>
    </motion.div>
  );
};

export default CreatePost;
