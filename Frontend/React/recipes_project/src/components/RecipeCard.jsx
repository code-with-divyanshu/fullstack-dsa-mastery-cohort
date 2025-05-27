import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="flex flex-col max-w-90 w-full  overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white transition-all duration-150 hover:scale-105">
      <div className="h-60 flex justify-center overflow-hidden items-center rounded-xl">
        <img
          src={recipe.image}
          alt="All Recipes"
          className="block w-full object-cover object-center h-full"
        />
      </div>
      <div>
        <div className="flex justify-between mb-3">
          <p className="text-lg text-cyan-700 font-medium">{recipe.chef}</p>
          <p className="text-lg text-pink-700 font-medium">{recipe.category}</p>
        </div>
        <h3 className="text-2xl text-purple-600 font-bold">{recipe.title}</h3>
        <Link
          to={`/recipe/details/${recipe.id}`}
          className="text-sm p-3 px-4 mt-5 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white"
          href="/recipe-item/664c8f193e7aa067e94e82cc"
        >
          Recipe Details
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
