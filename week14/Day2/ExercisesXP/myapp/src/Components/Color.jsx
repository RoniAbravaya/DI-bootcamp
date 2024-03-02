import React, { useState, useEffect } from 'react';

const Color = () => {
  const [favoriteColor, setFavoriteColor] = useState('red');

  useEffect(() => {
    alert('useEffect reached');
  }, []);

  const changeColor = () => {
    setFavoriteColor('blue');
  };

  return (
    <div>
      <h2>Favorite Color: {favoriteColor}</h2>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default Color;
