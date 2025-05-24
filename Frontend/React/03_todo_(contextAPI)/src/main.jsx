import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import ContextWrapper from "./context/ContextWrapper.jsx";

createRoot(document.getElementById("root")).render(
  <ContextWrapper>
    <App />
    <ToastContainer position="top-center" />
  </ContextWrapper>
);
