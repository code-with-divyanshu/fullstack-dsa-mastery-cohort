import { useDispatch } from "react-redux";
import Header from "./components/Header";
import MainRoutes from "./routes/MainRoutes";
import { useEffect } from "react";
import axios from "axios";
import { loginSuccess, logout } from "./features/posts/authSlice";

axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/user", { withCredentials: true })
      .then((res) => {
        dispatch(loginSuccess(res.data.user));
      })
      .catch(() => {
        dispatch(logout());
      });
  }, [dispatch]);

  return (
    <div className="bg-gray-900 min-h-screen w-full">
      <Header />

      <MainRoutes />
    </div>
  );
}

export default App;
