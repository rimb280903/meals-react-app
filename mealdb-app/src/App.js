import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import Favourites from './components/Favourites';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const searchRecipes = async (query) => {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    setRecipes(response.data.meals);
  };

  const handleFavoriteToggle = (recipe) => {
    const isFavorite = favorites.some(fav => fav.idMeal === recipe.idMeal);
    if (isFavorite) {
      setFavorites(favorites.filter(fav => fav.idMeal !== recipe.idMeal));
    } else {
      setFavorites([...favorites, recipe]);
    }
  };

  return (
    <div className="App">
      <h1>Recipe App</h1>
      <SearchBar onSearch={searchRecipes} />
      <div className="content">
        <RecipeList recipes={recipes} onSelect={setSelectedRecipe} />
        <RecipeDetail
          recipe={selectedRecipe}
          isFavorite={favorites.some(fav => fav.idMeal === selectedRecipe?.idMeal)}
          onFavoriteToggle={() => handleFavoriteToggle(selectedRecipe)}
        />
        <Favourites favorites={favorites} onSelect={setSelectedRecipe} onEdit={() => {}} />
      </div>
    </div>
  );
};

export default App;
