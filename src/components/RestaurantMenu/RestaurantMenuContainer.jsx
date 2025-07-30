import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import { RestaurantMenu } from "./RestaurantMenu";

export const RestaurantMenuContainer = () => {
  const { restaurantId } = useParams();
  const { menu } = useSelector((state) => selectRestaurantById(state, restaurantId));

  return (
    <RestaurantMenu menuIds={menu} />
  )
};
