import { Button } from "../Button/Button";

export const Counter = ({ value = 0, max = Infinity, min = 0, onChange }) => {
  const increment = () => { onChange(Math.min(value + 1, max)) };
  const decrement = () => { onChange(Math.max(value - 1, min)) };

  return (
    <div>
      <Button onClick={decrement} type="button">-</Button>
      {value}
      <Button onClick={increment} type="button">+</Button>
    </div>
  );
}