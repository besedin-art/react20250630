import { useState } from "react";

export const Counter = ({ initial = 0, max = Infinity, min = 0 }) => {
  const [value, setValue] = useState(initial);

  const decrement = () => {
    if (value - 1 < min) return;
    setValue(value - 1);
  }

  const increment = () => {
    if (value + 1 > max) return;
    setValue(value + 1);
  }

  return (
    <div>
      <button onClick={decrement}>-</button>
      {value}
      <button onClick={increment}>+</button>
    </div>
  );
}