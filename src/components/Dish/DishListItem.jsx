import { useUser } from "../UserContext/useUser";
import { DishCounter } from "../DishCounter/DishCounter";

export const DishListItem = ({ dish }) => {
  const { user } = useUser();

  return (
    <li style={{ display: 'flex', gap: '20px' }}>
      {dish.name}
      {
        user &&
        <DishCounter dishId={dish.id} />
      }
    </li>
  );
}