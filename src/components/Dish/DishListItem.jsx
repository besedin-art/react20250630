import { Counter } from "../Counter/Counter";
import { maxDishCount } from "../../constants/settings";
import { useState } from "react";

export const DishListItem = ({ dish }) => {
  const [count, setCount] = useState(0);
  return (
    <li style={{ display: 'flex', gap: '20px' }}>
      {dish.name}
      <Counter value={count} max={maxDishCount} onChange={value => {
        setCount(value);
      }} />
    </li>
  );
}