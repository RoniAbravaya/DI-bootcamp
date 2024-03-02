import React, { useState } from 'react';

const Events = () => {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const clickMe = () => {
    alert('I was clicked');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert('You pressed Enter. Input value: ' + event.target.value);
    }
  };

  const handleClick = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div>
      <button onClick={clickMe}>Click me!</button>
      <input
        type="text"
        placeholder="Type something..."
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleClick}>{isToggleOn ? 'ON' : 'OFF'}</button>
      <p>{isToggleOn ? 'on' : 'off'}</p>
    </div>
  );
};

export default Events;
