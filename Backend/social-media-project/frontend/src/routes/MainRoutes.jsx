import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import Posts from "../pages/Posts";
import CreatePost from "../pages/CreatePost";
import MyPosts from "../pages/MyPosts";
import AllPosts from "../pages/AllPosts";

const MainRoutes = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/profile" /> : <Login />}
      />
      <Route
        path="/signup"
        element={isAuthenticated ? <Navigate to="/profile" /> : <Signup />}
      />
      <Route
        path="/profile"
        element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
      />
      <Route
        path="/all-posts"
        element={isAuthenticated ? <AllPosts /> : <Navigate to="/login" />}
      />
      <Route
        path="/my-posts"
        element={isAuthenticated ? <MyPosts /> : <Navigate to="/login" />}
      />
      <Route
        path="/create-post"
        element={isAuthenticated ? <CreatePost /> : <Navigate to="/login" />}
      />
    </Routes>
  );
};

export default MainRoutes;
