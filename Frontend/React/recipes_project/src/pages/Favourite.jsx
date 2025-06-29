import React, { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Favourite = () => {
  let favourite = JSON.parse(localStorage.getItem("fav")) || [];

  console.log(favourite);

  if (favourite.length === 0)
    return (
      <p className="text-center text-accent text-2xl text-shadow-md text-shadow-accent">
        No Items in Favorites...
      </p>
    );

  return (
    <div className="flex flex-wrap  items-center px-5 sm:px-10 md:px-20 gap-20">
      {favourite.map((fav) => (
        <RecipeCard key={fav.id} recipe={fav} />
      ))}
    </div>
  );
};

export default Favourite;
