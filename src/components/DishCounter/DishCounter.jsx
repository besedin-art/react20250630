import { Counter } from "../Counter/Counter";
import { useCount } from "./useCount";

export const DishCounter = ({ dishId }) => {
  const { amount, increment, decrement } = useCount({ dishId });
  return (
    <Counter value={amount} increment={increment} decrement={decrement} />
  )
};
