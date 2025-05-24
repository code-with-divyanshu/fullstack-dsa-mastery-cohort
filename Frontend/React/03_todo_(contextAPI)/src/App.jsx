import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  return (
    <>
      <h1 className="text-4xl uppercase  py-10 text-purple-800 font-bold text-center ">
        Todo lists App
      </h1>
      <div className="flex flex-col  sm:flex-row  justify-between lg:px-50 md:px-20 items-center h-100 py-5 text-center">
        <Create />
        <Read />
      </div>
    </>
  );
};

export default App;
