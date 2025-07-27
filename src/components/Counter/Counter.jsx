import { Button } from "../Button/Button";

export const Counter = ({ value = 0, increment, decrement }) => {
  return (
    <div>
      <Button onClick={decrement} type="button">-</Button>
      {value}
      <Button onClick={increment} type="button">+</Button>
    </div>
  );
}