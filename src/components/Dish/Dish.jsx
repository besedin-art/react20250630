import { Counter } from "../Counter/Counter";
import { maxDishCount } from "../../constants/settings";

export const Dish = ({ dish }) => {
  return (
    <li style={{ display: 'flex', gap: '20px' }}>
      {dish.name}
      <Counter max={maxDishCount} />
    </li>
  );
}