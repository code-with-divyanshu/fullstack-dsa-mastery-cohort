import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  const [users, setUsers] = useState([
    {
      name: "Divyanshu",
      age: 24,
      gender: "male",
      city: "Dehradun",
    },
  ]);

  return (
    <>
      <Create setUsers={setUsers} />
      <hr />
      <Read users={users} />
    </>
  );
};

export default App;
