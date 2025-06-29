import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import About from "../pages/About";
import CreateRecipes from "../pages/CreateRecipes";
import SingleRecipe from "../pages/SingleRecipe";
import LearnAxios from "../pages/LearnAxios";
import UpdateRecipe from "../pages/UpdateRecipe";
import Favourite from "../pages/Favourite";
import PageNotFound from "../pages/PageNotFound";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipe/details/:id" element={<SingleRecipe />} />
      <Route path="/create-recipes" element={<CreateRecipes />} />
      <Route path="/recipe/update/:id" element={<UpdateRecipe />} />
      <Route path="/favourites" element={<Favourite />} />
      <Route path="/learn-axios" element={<LearnAxios />} />
      {/* Wild card route */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoutes;
