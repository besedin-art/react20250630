import { useUser } from "../UserContext/useUser";
import { DishCounter } from "../DishCounter/DishCounter";
import { Link } from "react-router";

export const DishListItem = ({ dish }) => {
  const { user } = useUser();

  return (
    <li style={{ display: 'flex', gap: '20px' }}>
      <Link to={`/dish/${dish.id}`}>{dish.name}</Link>
      {
        user &&
        <DishCounter dishId={dish.id} />
      }
    </li>
  );
}