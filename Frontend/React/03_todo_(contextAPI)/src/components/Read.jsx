import { toast } from "react-toastify";

const Read = (props) => {
  let todos = props.todos;
  let setTodos = props.setTodos;

  const deleteTodo = (todoId) => {
    todos = todos.filter((todo) => todo.id !== todoId);
    setTodos(todos);
    toast.error("Todo Deleted Successfully");
  };

  const completeTask = (todoId) => {
    const completeTodo = todos.map((todo) =>
      todo.id === todoId ? { ...todo, isCompleted: true } : todo
    );

    setTodos(completeTodo);
  };

  const renderTodos = todos.map((todo) => {
    return (
      <li
        key={todo.id}
        className={`bg-cyan-500 w-full rounded-2xl px-10 py-3 text-xl my-3 capitalize flex justify-between gap-7 
      `}
      >
        <span
          className={`${
            todo.isCompleted ? "line-through text-green-600" : "text-red-500 "
          }`}
        >
          {todo.title}
        </span>
        <span onClick={() => deleteTodo(todo.id)}>
          <i className="bi bi-trash-fill text-red-500"></i>
        </span>
        <span onClick={() => completeTask(todo.id)}>
          <i className="bi bi-check-lg font-bold text-green-800"></i>
        </span>
      </li>
    );
  });

  return (
    <div className="main">
      <h1 className="text-red-500 text-2xl my-3 mb-13 font-bold">
        Pending Tasks
      </h1>
      <ol>{renderTodos}</ol>
    </div>
  );
};

export default Read;
