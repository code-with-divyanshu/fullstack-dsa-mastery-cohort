import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const MyPosts = () => {
  const [posts, setPosts] = useState([]);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/posts/${user._id}`, {
        withCredentials: true,
      })
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen w-full  bg-gradient-to-br from-blue-50 to-violet-100 p-20 pt-30">
      <h2 className="text-3xl font-bold text-center py-10">My Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post) => (
          <div
            key={post._id}
            className="border-2 border-violet-700 p-4 rounded-md shadow-xl shadow-violet-800 justify-center items-center flex flex-col"
          >
            <p className="text-md stroke-amber-300 stroke-2 mb-3 ">
              {post.user.username}
            </p>
            <img
              src={post.image}
              alt="post"
              className="max-w-90 max-h-90 bg-amber-200 rounded mt-2 "
            />
            <p className="mt-2 font-bold">{post.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
