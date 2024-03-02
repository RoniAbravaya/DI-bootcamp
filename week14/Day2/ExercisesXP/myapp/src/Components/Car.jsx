import React, { useState } from 'react';
import Garage from './Garage';

const Car = ({ carInfo }) => {
  const [color, setColor] = useState(''); // Initializing color state

  // Function to handle color change
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const size = 'small'; // Hardcoded size for now, you can pass it dynamically if needed

  return (
    <div>
      <input
        type="text"
        placeholder="Enter car color"
        value={color}
        onChange={handleColorChange}
      />
      <h1>This car is {color ? `${color} ` : ''}{carInfo.model}</h1>
      <Garage size={size} /> {/* Rendering Garage component and passing the size */}
    </div>
  );
};

export default Car;
