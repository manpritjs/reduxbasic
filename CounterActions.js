import React from 'react';
import { useDispatch } from 'react-redux';

const CounterActions = () => {
  const dispatch = useDispatch();

  const increment = () => dispatch({ type: 'increment' });
  const decrement = () => dispatch({ type: 'decrement' });

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterActions;
