import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const [data] = useContext(recipecontext);
  console.log(data);

  return (
    <div className="flex flex-wrap  items-center px-5 sm:px-10 md:px-20 gap-20">
      {data?.length > 0
        ? data.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
        : "No recipes found!"}
    </div>
  );
};

export default Recipes;
