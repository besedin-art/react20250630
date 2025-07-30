import { useParams } from "react-router";
import { useUser } from "../../components/UserContext/useUser";
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/slice";
import { DishCounter } from "../../components/DishCounter/DishCounter";

export const DishPage = () => {
  const { dishId } = useParams();
  const dish = useSelector((state) => selectDishById(state, dishId));
  const { user } = useUser();
  return (
    <div>
      <h1>{dish.name}</h1>
      <div>Цена: ${dish.price}</div>
      <h3>Игредиенты</h3>
      <ul>
        {dish.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>

      {
        user &&
        <DishCounter dishId={dish.id} />
      }
    </div>
  )
};