import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: [],
    };
  }

  componentDidMount() {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
      .then(response => response.json())
      .then(data => {
        this.setState({ meals: data.meals });
      });
  }

  render() {
    const { meals } = this.state;

    return (
      <div className="App">
        <h1>MealDB Recipes</h1>
        <div className="meals">
          {meals.map(meal => (
            <div key={meal.idMeal} className="meal">
              <h2>{meal.strMeal}</h2>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
