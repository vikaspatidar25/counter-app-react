import React, { useState } from 'react';
import "./App.css"
const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((Count) => Count + 1);
  const decrement = () => setCount((Count) => Count - 1);
  const reset = () => setCount(0);

  return (
    <div className='container mx-auto mt-3 pt-3 pb-3' style={{ width: '300px' }}>
      <h3>Counter App (React)</h3>
      <div className="counter">
        <h2>Count: {count}</h2>
        <button className="btn1" onClick={increment}>
          Increment
        </button>
        <button className="btn2" onClick={decrement}>
          Decrement
        </button>
        <button className="btn3" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;