import { useState } from 'react';
import './App.css';


const inputFoods = require('./foods.json')

function App() {
  const [foods, setFoods] = useState(inputFoods);
  return (
    <div className="App">
      <h1>Food List</h1>
      {foods.map((food) => {
        return (<div key={food.id}>
          <p> {food.name} </p>
          <img src={food.image} width={100} />
        </div>);
      })}
    </div>
  );
}

export default App;
