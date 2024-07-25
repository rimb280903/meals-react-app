import React from 'react';
import './RecipeList.css';

const RecipeList = ({ recipes, onSelect }) => {
  if (!recipes || recipes.length === 0) {
    return <div className="no-recipes">No recipes found</div>;
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.idMeal} className="recipe-card" onClick={() => onSelect(recipe)}>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h3>{recipe.strMeal}</h3>
          <button>Watch the recipe</button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
