import { createContext, useState } from "react";

export const todoContect = createContext();

const ContextWrapper = (props) => {
  let [todos, setTodos] = useState([
    {
      id: 1,
      title: "Kuch Kam Karle Bhai",
      isCompleted: false,
    },
  ]);

  return (
    <todoContect.Provider value={[todos, setTodos]}>
      {props.children}
    </todoContect.Provider>
  );
};

export default ContextWrapper;
