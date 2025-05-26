import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";

const CreateRecipes = () => {
  const [data, setData] = useContext(recipecontext);

  const sumbitHandler = (recipe) => {
    recipe.id = nanoid();
    setData([...data, recipe]);
    reset("");
  };

  const { register, handleSubmit, reset } = useForm();
  return (
    <div className="w-full md:flex justify-center items-center">
      <form
        onSubmit={handleSubmit(sumbitHandler)}
        className="md:w-[90%] xl:w-[70%] 2xl:w-1/2 flex flex-col gap-5 bg-gradient-to-r from-pink-200 to-fuchsia-400 sm:p-10  p-5 rounded-xl"
      >
        <input
          {...register("image")}
          type="url"
          placeholder="Enter url of recipe image"
          className="block border-b-2 outline-0 border-b-blue-500 p-2.5 text-lg placeholder:text-gray-400 placeholder:font-semibold"
        />

        <input
          {...register("title")}
          type="text"
          placeholder="Recipe Title"
          className="block border-b-2 outline-0 border-b-blue-500 p-2.5 text-lg placeholder:text-gray-400 placeholder:font-semibold"
        />

        <input
          {...register("chef")}
          type="text"
          placeholder="Chef Name"
          className="block border-b-2 outline-0 border-b-blue-500 p-2.5 text-lg placeholder:text-gray-400 placeholder:font-semibold"
        />

        <textarea
          {...register("description")}
          type="text"
          placeholder="Enter Description Here"
          className="block border-b-2 outline-0 border-b-blue-500 p-2.5 text-lg placeholder:text-gray-400 placeholder:font-semibold"
        ></textarea>

        <textarea
          {...register("ingredients")}
          type="text"
          placeholder="Write ingredients seperated by comma"
          className="block border-b-2 outline-0 border-b-blue-500 p-2.5 text-lg placeholder:text-gray-400 placeholder:font-semibold"
        ></textarea>

        <textarea
          {...register("instructions")}
          type="text"
          placeholder="Write instructions seperated by comma"
          className="block border-b-2 outline-0 border-b-blue-500 p-2.5 text-lg placeholder:text-gray-400 placeholder:font-semibold"
        ></textarea>

        <select
          {...register("category")}
          className="block border-b-2 outline-0 border-b-blue-500 p-2.5 text-lg text-gray-400 font-semibold"
        >
          <option value="veg">Vegetarian</option>
          <option value="non-veg">Non Vegetarian</option>
          <option value="vegan">Vegan</option>
        </select>

        <button className="bg-purple-800 text-xl py-2 px-5 rounded-xl mt-5 hover:bg-pink-800">
          Create Recipe +
        </button>
      </form>
    </div>
  );
};

export default CreateRecipes;
