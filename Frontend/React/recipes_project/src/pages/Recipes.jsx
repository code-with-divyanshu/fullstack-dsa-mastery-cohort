import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";

const Recipes = () => {
  const [data] = useContext(recipecontext);

  return (
    <div className="">
      {data.map((recipe) => (
        <div key={recipe.id} className="">
          <h3 className="">{recipe.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
