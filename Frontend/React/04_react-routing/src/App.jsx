import Navbar from "./components/Navbar";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div className="w-screen h-screen text-xl">
      <Navbar />
      <div className="px-10">
        <MainRoutes />
      </div>
    </div>
  );
};

export default App;
