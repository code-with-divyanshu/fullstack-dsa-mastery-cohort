import { nanoid } from "nanoid";
import { useState } from "react";

const Create = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    let newTodo = {
      id: nanoid(),
      title: title,
      isCompleted: false,
    };

    let exsitingTodo = todos.find((todo) => todo.title === title);
    if (exsitingTodo) {
      alert(`${title} is already in todo list`);
    } else {
      setTodos((prevUsers) => [...prevUsers, newTodo]);
    }

    console.log(newTodo);
    setTitle("");
  };

  return (
    <>
      <form onSubmit={submitHandler} className="flex flex-col gap-10">
        <input
          className="py-3 px-3 outline-0 border-b-2 text-2xl placeholder:text-gray-500 placeholder:capitalize"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="title"
        />
        <button className="bg-purple-600 p-3 rounded-2xl text-xl font-bold">
          Create Todo
        </button>
      </form>
    </>
  );
};

export default Create;
