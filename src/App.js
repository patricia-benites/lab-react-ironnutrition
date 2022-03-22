import { useState } from 'react';
import './App.css';
import { AddFoodForm } from './components/AddFoodForm/AddFoodForm';
import { FoodBox } from './components/FoodBox/FoodBox';

const inputFoods = require('./foods.json');

function App() {
  const [foods, setFoods] = useState(inputFoods);
  return (
    <div className="App">
      <h1>Food List</h1>
      <AddFoodForm setFoods={setFoods}/>
      {foods.map((food) => {
        return (
          <div key={food.name}>
            <FoodBox food={food}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
