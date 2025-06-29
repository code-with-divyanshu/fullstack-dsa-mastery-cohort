import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="flex flex-col max-w-90 w-full overflow-hidden p-5 bg-bg-secondary shadow-xl gap-5 border-2 rounded-2xl shadow-border-shadow transition-all duration-150 hover:scale-105">
      <div className="h-60 flex justify-center overflow-hidden items-center rounded-xl">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="block w-full object-cover object-center h-full"
        />
      </div>
      <div>
        <div className="flex justify-between mb-3">
          <p className="text-lg text-text-primary font-medium">{recipe.chef}</p>
          <p className="text-lg text-text-primary font-medium capitalize">
            {recipe.category}
          </p>
        </div>
        <h3 className="text-2xl text-accent font-bold">{recipe.title}</h3>
        <Link
          to={`/recipe/details/${recipe.id}`}
          className="text-sm p-3 px-4 mt-5 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-accent w-full text-center text-bg-primary hover:bg-hover transition-colors duration-300"
        >
          Recipe Details
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
