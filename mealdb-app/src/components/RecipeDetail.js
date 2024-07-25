import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import './RecipeDetail.css';

const RecipeDetail = ({ recipe, isFavorite, onFavoriteToggle }) => {
  if (!recipe) return <div className="recipe-detail">Select a recipe to see details</div>;

  return (
    <div className="recipe-detail">
      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <p><strong>Category:</strong> {recipe.strCategory}</p>
      <p><strong>Area:</strong> {recipe.strArea}</p>
      <p><strong>Instructions:</strong> {recipe.strInstructions}</p>
      <h3>Ingredients:</h3>
      <ul>
        {Object.keys(recipe)
          .filter(key => key.includes('strIngredient') && recipe[key])
          .map(key => (
            <li key={key}>{recipe[key]}</li>
          ))}
      </ul>
      <button onClick={onFavoriteToggle}>
        {isFavorite ? <FaStar /> : <FaRegStar />} {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default RecipeDetail;
