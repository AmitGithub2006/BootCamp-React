import React from "react";
import useCounter from "./hooks/useCounter";

function CounterTwo() {
    const { count, increment, decrement, reset } = useCounter(10, 10);
  return (
    <div>
      <h1>Count - {count}</h1>
      <button onClick={decrement}>Dec</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Inc</button>
    </div>
  );
}

export default CounterTwo;