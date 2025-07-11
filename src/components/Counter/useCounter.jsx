import { useState } from "react";

export const useCounter = (initial, max, min) => {
  const [value, setValue] = useState(initial);
  const increment = () => { setValue(Math.min(value + 1, max)) };
  const decrement = () => { setValue(Math.max(value - 1, min)) };

  return {
    value,
    increment,
    decrement
  };
}