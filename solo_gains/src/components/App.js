// App.js
import React from 'react';
import CounterButton from './CounterButton';
import { CounterProvider } from './CounterContext';

const App = () => {
  return (
    <CounterProvider>
      <div>
        <h1>Counter App</h1>
        <CounterButton />
        {/* Other components that need access to the counter context */}
      </div>
    </CounterProvider>
  );
};

export default App;
