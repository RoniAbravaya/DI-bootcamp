import React, { useState } from 'react';
import BuggyCounter from './BuggyCounter';
import ErrorBoundary from './ErrorBoundary';
import LifecycleComponent from './LifecycleComponent.jsx';
import Child from './Child.jsx';

function App() {
  const [favoriteColor, setFavoriteColor] = useState('red');
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(false);
  };

  return (
    <div className="App">
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      <div>
        <h2>My Favorite Color is {favoriteColor}</h2>
        <LifecycleComponent />
        {show && <Child />}
        <button onClick={handleClick}>Delete</button>
      </div>
    </div>
  );
}

export default App;
