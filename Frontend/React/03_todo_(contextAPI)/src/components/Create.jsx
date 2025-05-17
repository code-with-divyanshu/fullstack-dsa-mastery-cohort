import { nanoid } from "nanoid";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Create = ({ todos, setTodos }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useForm;

  const submitHandler = (data) => {
    data.id = nanoid();
    data.isCompleted = false;
    console.log(data);

    setTodos((prevTodo) => [...prevTodo, data]);
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col gap-10"
      >
        <input
          {...register("title", {
            required: "title can not be empty",
          })}
          className="py-3 px-3 outline-0 border-b-2 text-2xl placeholder:text-gray-500 placeholder:capitalize"
          type="text"
          placeholder="title"
        />
        {errors?.title?.message && (
          <small className="text-red-600 text-lg">{errors.title.message}</small>
        )}
        <button className="bg-purple-600 p-3 rounded-2xl text-xl font-bold">
          Create Todo
        </button>
      </form>
    </>
  );
};

export default Create;
