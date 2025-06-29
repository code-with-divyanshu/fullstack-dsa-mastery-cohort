import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div className="max-w-screen w-full min-h-screen bg-bg-primary text-text-primary">
      <Navbar />
      <main className="px-4 sm:px-10 py-10 w-full ">
        <MainRoutes />
      </main>
      <Footer />
    </div>
  );
};

export default App;
