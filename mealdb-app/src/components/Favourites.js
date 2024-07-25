import React from 'react';
import './Favorites.css';

const Favourites = ({ favorites, onSelect, onRemove }) => {
  if (!favorites || favorites.length === 0) {
    return <div className="no-favorites">No favorites yet</div>;
  }

  return (
    <div className="favorites">
      <h2>Your Favorites</h2> <br/>
      {favorites.map((recipe) => (
        <div key={recipe.idMeal} className="favorite-card" onClick={() => onSelect(recipe)}>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h3>{recipe.strMeal}</h3>
          <button 
            onClick={(e) => { 
              e.stopPropagation(); 
              onRemove(recipe); 
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Favourites;
