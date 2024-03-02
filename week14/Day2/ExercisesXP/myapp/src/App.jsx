import React from 'react';
import Car from './Components/Car'; // Importing Car component
import Events from './Components/Events.jsx';
import Phone from './Components/Phone';
import Color from './Components/Color';

const carinfo = { name: "Ford", model: "Mustang" }; // Car information object

function App() {
  return (
    <div className="App">
      <Car carInfo={carinfo} /> {/* Rendering Car component and passing carinfo as props */}
      <Events />
      <Phone />
      <Color />
    </div>
  );
}

export default App;
