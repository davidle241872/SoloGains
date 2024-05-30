// ParentComponent.js
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Did you workout today?</h1>
      <h2>how many worked out today: {count}</h2>
      <ChildComponent increment={incrementCount} />
    </div>
  );
};

export default ParentComponent;
