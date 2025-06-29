import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const UpdateRecipe = () => {
  const [data, setData] = useContext(recipecontext);
  const params = useParams();
  const navigate = useNavigate();

  const recipe = data.find((recipe) => params.id == recipe.id);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: recipe || {},
  });

  useEffect(() => {
    reset(recipe); // reset form when recipe loads or changes
  }, [recipe, reset]);

  if (!recipe) return <p className="text-center text-gray-500">Loading...</p>;

  const updateHandler = (updatedRecipe) => {
    const index = data.findIndex((recipe) => params.id == recipe.id);
    const updateData = [...data];
    updateData[index] = { ...updateData[index], ...updatedRecipe };
    setData(updateData);
    localStorage.setItem("recipes", JSON.stringify(updateData));

    toast.success("Update Successfully");
    navigate(`/recipe/details/${params.id}`);
  };

  return (
    <div className="max-w-screen flex justify-center items-start p-6 bg-bg-primary w-full">
      <form
        onSubmit={handleSubmit(updateHandler)}
        className="w-full max-w-2xl bg-bg-secondary p-8 rounded-xl text-text-primary shadow-md"
      >
        <input
          {...register("image", { required: true })}
          type="url"
          placeholder="Enter URL of recipe image"
          className="block border-b-2 outline-none border-b-border-shadow p-2.5 w-full text-lg placeholder:text-text-primary placeholder:font-semibold mb-4"
        />
        {errors.image && (
          <p className="text-red-500 mb-2">Image URL is required.</p>
        )}

        <input
          {...register("title", { required: true })}
          type="text"
          placeholder="Recipe Title"
          className="block border-b-2 outline-none border-b-border-shadow p-2.5 text-lg placeholder:text-text-primary w-full placeholder:font-semibold mb-4"
        />
        {errors.title && (
          <p className="text-red-500 mb-2">Title is required.</p>
        )}

        <input
          {...register("chef", { required: true })}
          type="text"
          placeholder="Chef Name"
          className="block border-b-2 outline-none border-b-border-shadow p-2.5 text-lg placeholder:text-text-primary w-full placeholder:font-semibold mb-4"
        />
        {errors.chef && (
          <p className="text-red-500 mb-2">Chef name is required.</p>
        )}

        <textarea
          {...register("description")}
          placeholder="Enter Description Here"
          className="block border-b-2 outline-none border-b-border-shadow p-2.5 text-lg placeholder:text-text-primary w-full placeholder:font-semibold mb-4"
          rows={3}
        ></textarea>

        <textarea
          {...register("ingredients")}
          placeholder="Write ingredients separated by comma"
          className="block border-b-2 outline-none border-b-border-shadow p-2.5 text-lg placeholder:text-text-primary w-full placeholder:font-semibold mb-4 h-32"
        ></textarea>

        <textarea
          {...register("instructions")}
          placeholder="Write instructions separated by comma"
          className="block border-b-2 outline-none border-b-border-shadow p-2.5 text-lg placeholder:text-text-primary w-full placeholder:font-semibold mb-4 h-42"
        ></textarea>

        <select
          {...register("category", { required: true })}
          className="block border-b-2 outline-none border-b-border-shadow p-2.5 text-lg text-accent font-semibold w-full mb-6"
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="snack">Snack</option>
          <option value="dinner">Dinner</option>
        </select>
        {errors.category && (
          <p className="text-red-500 mb-2">Category is required.</p>
        )}

        <button className="bg-accent py-3 rounded-xl hover:bg-hover text-yellow-200 font-medium tracking-wider text-lg uppercase w-full transition">
          Update Recipe
        </button>
      </form>
    </div>
  );
};

export default UpdateRecipe;
