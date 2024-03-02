import React, { useEffect } from 'react';

const Child = () => {
  useEffect(() => {
    return () => {
      alert('unmounted');
    };
  }, []);

  return <h1>Hello World!</h1>;
};

export default Child;
