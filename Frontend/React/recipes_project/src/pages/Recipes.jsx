import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const [data] = useContext(recipecontext);
  console.log(data);

  return (
    <div className="flex flex-wrap  items-center px-5 sm:px-10 md:px-20 gap-20">
      {data?.length > 0 ? (
        data.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
      ) : (
        <p className="text-center text-accent text-2xl text-shadow-md text-shadow-accent">
          No Recipes Found
        </p>
      )}
    </div>
  );
};

export default Recipes;
