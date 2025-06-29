import { useContext } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const [data, setData, favourite, setFavourite] = useContext(recipecontext);

  const params = useParams();
  const navigate = useNavigate();

  const recipe = data.find((recipe) => recipe.id == params.id);

  const deleteHandler = () => {
    const filteredRecipe = data.filter((recipe) => recipe.id !== params.id);
    const filteredFavorite = favourite.filter(
      (recipe) => recipe.id !== params.id
    );
    setData(filteredRecipe);
    setFavourite(filteredFavorite);
    localStorage.setItem("recipes", JSON.stringify(filteredRecipe));
    localStorage.setItem("fav", JSON.stringify(filteredFavorite));
    toast.error("Recipe deleted successfully");
    navigate("/recipes");
  };

  const favControl = (recipe) => {
    const isAlreadyFav = favourite.some((fav) => fav.id === recipe.id);
    if (!isAlreadyFav) {
      const updatedFavs = [...favourite, recipe];
      setFavourite(updatedFavs);
      localStorage.setItem("fav", JSON.stringify(updatedFavs));
      toast.success("Added to favourites");
    }
  };

  const unFavControl = (recipe) => {
    const updatedFavs = favourite.filter((rec) => rec.id !== recipe.id);
    setFavourite(updatedFavs);
    localStorage.setItem("fav", JSON.stringify(updatedFavs));
    toast.info("Removed from favourites");
  };

  console.log(favourite);

  if (!recipe) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="w-full max-w-screen flex justify-center items-center gap-10 bg-bg-primary p-6">
      <div className="w-full max-w-2xl">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="block w-full rounded-xl mb-4 object-cover object-center border border-border-shadow"
          style={{ height: "auto", maxHeight: "400px" }}
        />
        <div className="flex justify-between mb-3">
          <p className="text-lg text-text-primary font-medium">{recipe.chef}</p>
          <p className="text-lg text-accent font-medium capitalize">
            {recipe.category}
          </p>
        </div>
        <h3 className="text-2xl text-accent font-bold mb-4">{recipe.title}</h3>
        {/* Description */}
        <p className="mb-4 text-text-primary text-base font-medium">
          {recipe.description}
        </p>

        {/* <i onClick={() => favControl(recipe)} className="bi bi-heart-fill"></i>

        <i onClick={() => unFavControl(recipe)} className="bi bi-heart"></i> */}

        {favourite.some((fav) => fav.id === recipe.id) ? (
          <i
            onClick={() => unFavControl(recipe)}
            className="bi bi-heart-fill text-red-500 text-2xl cursor-pointer"
            title="Remove from favourites"
          ></i>
        ) : (
          <i
            onClick={() => favControl(recipe)}
            className="bi bi-heart text-gray-400 text-2xl cursor-pointer"
            title="Add to favourites"
          ></i>
        )}

        {/* Ingredients
        <div className="mb-4">
          <h4 className="text-xl font-semibold text-highlight mb-2">
            Ingredients:
          </h4>
          <ul className="list-disc list-inside text-text-primary">
            {recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div> */}

        {/* Instructions */}
        {/* <div className="mb-6">
          <h4 className="text-xl font-semibold text-highlight mb-2">
            Instructions:
          </h4>
          <ol className="list-decimal list-inside text-text-primary space-y-1">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div> */}
        {/* Buttons */}
        <button
          onClick={deleteHandler}
          className="text-lg p-3 rounded-lg uppercase font-medium tracking-wider shadow-md bg-accent w-full text-yellow-200 hover:bg-hover transition mb-4"
        >
          Delete Recipe
        </button>
        <Link
          to={`/recipe/update/${recipe.id}`}
          className="block text-center bg-accent py-3 rounded-xl hover:bg-hover text-yellow-200 font-medium tracking-wider text-lg uppercase w-full transition"
        >
          Update Recipe
        </Link>
      </div>
    </div>
  );
};

export default SingleRecipe;
