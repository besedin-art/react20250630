import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/slice";

export const CartListItem = ({ dishId, amount }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));

  return (
    <li>
      {dish.name}: {amount}
    </li>
  )
};
