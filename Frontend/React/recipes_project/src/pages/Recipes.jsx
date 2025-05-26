import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";

const Recipes = () => {
  const [data] = useContext(recipecontext);
  console.log(data);

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center px-5 sm:px-10 md:px-20 gap-10">
      {data.map((recipe) => (
        <div
          key={recipe.id}
          className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white"
        >
          <div class="h-40 flex justify-center overflow-hidden items-center rounded-xl">
            <img src={recipe.image} alt="All Recipes" class="block w-full" />
          </div>
          <div>
            <span class="text-sm text-cyan-700 font-medium">{recipe.chef}</span>
            <h3 className="text-2xl text-white">{recipe.title}</h3>
            <a
              class="text-sm p-3 px-4 mt-5 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white"
              href="/recipe-item/664c8f193e7aa067e94e82cc"
            >
              Recipe Details
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
