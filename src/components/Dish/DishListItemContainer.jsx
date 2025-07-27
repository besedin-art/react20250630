import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/slice";
import { DishListItem } from "./DishListItem";

export const DishListItemContainer = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));
  return (
    <DishListItem dish={dish} />
  )
};
