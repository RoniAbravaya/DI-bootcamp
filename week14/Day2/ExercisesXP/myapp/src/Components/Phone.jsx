// Phone.js

import React, { useState } from 'react';

const Phone = () => {
  const [phoneInfo, setPhoneInfo] = useState({
    brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020
  });

  const changeColor = () => {
    setPhoneInfo(prevState => ({
      ...prevState,
      color: "blue"
    }));
  };

  return (
    <div>
      <h2>Phone Information</h2>
      <p>Brand: {phoneInfo.brand}</p>
      <p>Model: {phoneInfo.model}</p>
      <p>Color: {phoneInfo.color}</p>
      <p>Year: {phoneInfo.year}</p>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default Phone;
