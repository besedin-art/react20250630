import { Counter } from "../Counter/Counter";
import { maxDishCount } from "../../constants/settings";
import { useState } from "react";
import { useUser } from "../UserContext/useUser";

export const DishListItem = ({ dish }) => {
  const { user } = useUser();

  const [count, setCount] = useState(0);
  return (
    <li style={{ display: 'flex', gap: '20px' }}>
      {dish.name}
      {
        user &&
        <Counter value={count} max={maxDishCount} onChange={value => {
          setCount(value);
        }} />
      }
    </li>
  );
}