import Navbar from "./components/Navbar";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <div className="px-4 sm:px-20 py-10">
        <MainRoutes />
      </div>
    </div>
  );
};

export default App;
