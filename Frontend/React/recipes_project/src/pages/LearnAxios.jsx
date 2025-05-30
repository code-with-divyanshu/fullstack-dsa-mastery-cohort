import { useEffect, useState } from "react";
import axios from "../utils/axios";

const LearnAxios = () => {
  const [recipes, setRecipes] = useState([]);
  const getRecipes = async () => {
    try {
      const response = await axios.get("/recipes");
      console.log(response.data);
      setRecipes(response.data.recipes);
    } catch (error) {
      console.log("There was an Error: " + error);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);
  return (
    <div className="flex flex-wrap  items-center px-5 sm:px-10 md:px-20 gap-20">
      {recipes.map((recipe) => (
        <div className="fflex flex-col max-w-90 w-full overflow-hidden p-5 bg-bg-secondary shadow-xl gap-5 border-2 rounded-2xl shadow-border-shadow transition-all duration-150 hover:scale-105">
          <div className="h-60 flex justify-center overflow-hidden items-center rounded-xl">
            <img
              src={recipe.image}
              alt="All Recipes"
              className="block w-full object-cover object-center h-full"
            />
          </div>
          <div>
            <div className="flex justify-between mb-3">
              <p className="text-lg text-text-primary font-medium">
                {recipe.cuisine}
              </p>
              <p className="text-lg text-highlight font-medium capitalize">
                {recipe.mealType[0]}
              </p>
            </div>
            <h3 className="text-2xl text-accent font-bold">{recipe.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LearnAxios;
