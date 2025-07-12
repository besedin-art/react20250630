import { Counter } from "../Counter/Counter";
import { maxDishCount } from "../../constants/settings";
import { useState } from "react";

export const DishListItem = ({ dish }) => {
  const [rating, setRating] = useState(0);
  return (
    <li style={{ display: 'flex', gap: '20px' }}>
      {dish.name}
      <Counter value={rating} max={maxDishCount} onChange={value => {
        setRating(value);
      }} />
    </li>
  );
}