import { useState } from 'react';
import './App.css';
import { FoodBox } from './components/FoodBox/FoodBox';

const inputFoods = require('./foods.json');

function App() {
  const [foods, setFoods] = useState(inputFoods);
  return (
    <div className="App">
      <h1>Food List</h1>
      {foods.map((food) => {
        return (
          <div key={food.name}>
            <FoodBox key={food.name}
              food={{
                name: 'Orange',
                calories: 85,
                image: 'https://i.imgur.com/abKGOcv.jpg',
                servings: 1,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
