import { createContext, useState } from "react";

export const recipecontext = createContext(null);

const RecipeContext = (props) => {
  const [data, setData] = useState([]);
  console.log(data);

  return (
    <recipecontext.Provider value={[data, setData]}>
      {props.children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;
