import { Counter } from "../Counter/Counter";
import { maxDishCount } from "../../constants/settings";

export const DishListItem = ({ dish }) => {
  return (
    <li style={{ display: 'flex', gap: '20px' }}>
      {dish.name}
      <Counter initial="0" max={maxDishCount} />
    </li>
  );
}