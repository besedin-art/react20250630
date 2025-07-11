import { useCounter } from "./useCounter";

export const Counter = ({ initial = 0, max = Infinity, min = 0 }) => {
  const { value, increment, decrement } = useCounter(initial, max, min);

  return (
    <div>
      <button onClick={decrement}>-</button>
      {value}
      <button onClick={increment}>+</button>
    </div>
  );
}