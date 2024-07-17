import React from 'react';
import useCounter from './hooks/useCounter';

function CounterOne() {
    const { count, increment, decrement, reset } = useCounter(0, 5);

  return (
    <div>
        <h1>Count - {count}</h1>
        <button onClick={decrement}>Dec</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Inc</button>
    </div>
  )
}

export default CounterOne;