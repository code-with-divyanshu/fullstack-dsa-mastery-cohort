import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateRecipes = () => {
  const navigate = useNavigate();

  const [data, setData] = useContext(recipecontext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const sumbitHandler = (recipe) => {
    recipe.id = nanoid();
    const newData = [...data];
    newData.push(recipe);
    setData(newData);
    localStorage.setItem("recipes", JSON.stringify(newData));
    toast.success("New recipe created successfully!");
    navigate("/recipes");
    reset("");
  };

  return (
    <div className="w-full md:flex justify-center items-center">
      <form
        onSubmit={handleSubmit(sumbitHandler)}
        className="md:w-[90%] xl:w-[70%] 2xl:w-1/2 flex flex-col gap-5 bg-bg-secondary p-8 rounded-xl shadow-md"
      >
        <input
          {...register("image", { required: true })}
          type="url"
          placeholder="Enter url of recipe image"
          className="block border-b-2 border-border-shadow outline-none p-2.5 text-lg placeholder:text-text-primary placeholder:font-semibold text-text-primary bg-bg-primary"
        />
        {errors.image && (
          <p className="text-red-500 mb-2">Image URL is required.</p>
        )}

        <input
          {...register("title", { required: true })}
          type="text"
          placeholder="Recipe Title"
          className="block border-b-2 border-border-shadow outline-none p-2.5 text-lg placeholder:text-text-primary placeholder:font-semibold text-text-primary bg-bg-primary"
        />
        {errors.title && (
          <p className="text-red-500 mb-2">Title is required.</p>
        )}

        <input
          {...register("chef", { required: true })}
          type="text"
          placeholder="Chef Name"
          className="block border-b-2 border-border-shadow outline-none p-2.5 text-lg placeholder:text-text-primary placeholder:font-semibold text-text-primary bg-bg-primary"
        />
        {errors.chef && <p className="text-red-500 mb-2">Chef is required.</p>}

        <textarea
          {...register("description", { required: true })}
          placeholder="Enter Description Here"
          className="block border-b-2 border-border-shadow outline-none p-2.5 text-lg placeholder:text-text-primary placeholder:font-semibold text-text-primary bg-bg-primary"
        ></textarea>
        {errors.description && (
          <p className="text-red-500 mb-2">Description is required.</p>
        )}

        <textarea
          {...register("ingredients")}
          placeholder="Write ingredients separated by comma"
          className="block border-b-2 border-border-shadow outline-none p-2.5 text-lg placeholder:text-text-primary placeholder:font-semibold text-text-primary bg-bg-primary"
        ></textarea>

        <textarea
          {...register("instructions")}
          placeholder="Write instructions separated by comma"
          className="block border-b-2 border-border-shadow outline-none p-2.5 text-lg placeholder:text-text-primary placeholder:font-semibold text-text-primary bg-bg-primary"
        ></textarea>

        <select
          {...register("category", { required: true })}
          className="block border-b-2 border-border-shadow outline-none p-2.5 text-lg text-accent font-semibold bg-bg-primary"
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="snack">Snack</option>
          <option value="dinner">Dinner</option>
        </select>
        {errors.category && (
          <p className="text-red-500 mb-2">Category is required.</p>
        )}

        <button
          type="submit"
          className="bg-accent text-bg-primary text-xl py-2 px-5 rounded-xl mt-5 hover:bg-highlight font-semibold uppercase transition-colors duration-200"
        >
          Create Recipe +
        </button>
      </form>
    </div>
  );
};

export default CreateRecipes;
