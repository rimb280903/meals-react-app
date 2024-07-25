import React from 'react';
import './Favorites.css';

const Favourites = ({ favorites, onSelect, onEdit }) => {
  return (
    <div className="favorites">
      <h2>Favorites</h2>
      {favorites.map((recipe) => (
        <div key={recipe.idMeal} className="favorite-card">
          <h3 onClick={() => onSelect(recipe)}>{recipe.strMeal}</h3>
          <button onClick={() => onEdit(recipe)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default Favourites;
