import React from "react";
import type { recipe } from "../constants/constants";

type RecipeCardProps = {
  recipe: recipe;
};

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return <div>{recipe.name} </div>;
};
