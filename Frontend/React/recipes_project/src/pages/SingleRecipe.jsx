import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const SingleRecipe = () => {
  const [data, setData] = useContext(recipecontext);
  const params = useParams();
  const navigate = useNavigate();
  const recipe = data.find((recipe) => params.id == recipe.id);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: recipe.title,
      image: recipe.image,
      chef: recipe.chef,
      description: recipe.description,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
      category: recipe.category,
    },
  });

  const sumbitHandler = (recipe) => {
    const index = data.findIndex((recipe) => params.id == recipe.id);
    const copyData = [...data];
    copyData[index] = { ...copyData[index], ...recipe };
    setData(copyData);
    toast.success("Update Successfully");
  };

  const deleteHandler = () => {
    const filterRecipe = data.filter((recipe) => recipe.id != params.id);
    setData(filterRecipe);
    toast.error("recipe deleted succefully");
    navigate("/recipes");
  };

  if (!recipe) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="w-full  flex flex-wrap max-w-screen justify-center items-center gap-40">
      <div className="sm:1/2">
        <img
          src={recipe.image}
          alt="All Recipes"
          className="block w-full max-w-80 rounded-xl mb-4 object-cover object-center h-full"
        />
        <div className="flex justify-between mb-3">
          <p className="text-lg text-cyan-700 font-medium">{recipe.chef}</p>
          <p className="text-lg text-pink-700 font-medium">{recipe.category}</p>
        </div>
        <h3 className="text-2xl text-purple-600 font-bold">{recipe.title}</h3>
        <button
          onClick={deleteHandler}
          className="text-sm p-3 px-4 mt-5 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white"
          href="/recipe-item/664c8f193e7aa067e94e82cc"
        >
          Delete Recipe
        </button>
      </div>

      <form
        onSubmit={handleSubmit(sumbitHandler)}
        className="sm:w-1/2  bg-gradient-to-r from-pink-200 to-fuchsia-400  p-10 rounded-xl"
      >
        <input
          {...register("image")}
          type="url"
          placeholder="Enter url of recipe image"
          className="block border-b-2 outline-0 border-b-blue-500 p-2.5 w-full text-lg placeholder:text-gray-400 placeholder:font-semibold"
        />

        <input
          {...register("title")}
          type="text"
          placeholder="Recipe Title"
          className="block border-b-2 outline-0 border-b-blue-500 p-2.5 text-lg placeholder:text-gray-400  w-full placeholder:font-semibold"
        />

        <input
          {...register("chef")}
          type="text"
          placeholder="Chef Name"
          className="block border-b-2 outline-0 w-full border-b-blue-500 p-2.5 text-lg placeholder:text-gray-400 placeholder:font-semibold"
        />

        <textarea
          {...register("description")}
          type="text"
          placeholder="Enter Description Here"
          className="block border-b-2 outline-0 border-b-blue-500 p-2.5 text-lg placeholder:text-gray-400 placeholder:font-semibold w-full"
        ></textarea>

        <textarea
          {...register("ingredients")}
          type="text"
          placeholder="Write ingredients seperated by comma"
          className="block border-b-2 outline-0 border-b-blue-500 p-2.5 text-lg placeholder:text-gray-400 placeholder:font-semibold h-40 w-full"
        ></textarea>

        <textarea
          {...register("instructions")}
          type="text"
          placeholder="Write instructions seperated by comma"
          className="block border-b-2 outline-0 border-b-blue-500 p-2.5 text-lg placeholder:text-gray-400 placeholder:font-semibold w-full h-50"
        ></textarea>

        <select
          {...register("category")}
          className="block border-b-2 outline-0 border-b-blue-500 p-2.5 text-lg text-gray-400 font-semibold w-full"
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="snack">Snak</option>
          <option value="dinner">Dinner</option>
        </select>

        <button className="bg-purple-800 text-xl py-2 px-5 rounded-xl mt-5 hover:bg-pink-800">
          Update Recipe
        </button>
      </form>
    </div>
  );
};

export default SingleRecipe;
