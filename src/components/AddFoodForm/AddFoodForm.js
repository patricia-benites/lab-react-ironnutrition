import { useState } from 'react';
import { Divider, Input } from 'antd';

export function AddFoodForm({ setFoods }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');
  // function to handle the input changes
  const handleInputs = (inputName, event) => {
    switch (inputName) {
      case 'name':
        setName(event.target.value);
        break;
      case 'image':
        setImage(event.target.value);
        break;
      case 'calories':
        setCalories(event.target.value);
        break;
      case 'servings':
        setServings(event.target.value);
        break;
      default:
        break;
    }
  };

  // function to handle the form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    // setContacts function coming from the parent component
    setFoods((foods) => {
      return [
        ...foods,
        {
          name,
        },
      ];
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={undefined}
        type="text"
        onChange={(event) => handleInputs('name', event)}
      />

      <label>Image</label>
      {/* render antd <Input /> type="text" here */}
      <Input
        value={undefined}
        type="text"
        onChange={(event) => handleInputs('image', event)}
      />

      <label>Calories</label>
      {/* render antd <Input /> type="number" here */}
      <Input
        value={undefined}
        type="text"
        onChange={(event) => handleInputs('calories', event)}
      />

      <label>Servings</label>
      {/* render antd <Input /> type="number" here */}
      <Input
        value={undefined}
        type="text"
        onChange={(event) => handleInputs('servings', event)}
      />

      <button type="submit">Create</button>
    </form>
  );
}
