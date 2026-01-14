import { useEffect, useState } from "react";
import axios from "axios";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/posts/", { withCredentials: true })
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen w-full  bg-gradient-to-br from-blue-50 to-violet-100 p-4 pt-20">
      <h2 className="text-3xl font-bold text-center py-10">All Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post) => (
          <div
            key={post._id}
            className="border-2 border-violet-950 p-4 rounded-md shadow-xl shadow-violet-800 justify-center items-center flex flex-col"
          >
            <p className="text-sm text-gray-500">{post.user.username}</p>
            <img
              src={post.image}
              alt="post"
              className="max-w-100 max-h-100 rounded mt-2 "
            />
            <p className="mt-2 font-bold">{post.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPosts;
