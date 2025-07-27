import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import { Restaurant } from "./Restaurant";

export const RestaurantContainer = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  const { name, menu, reviews } = restaurant || {};
  return (
    <Restaurant
      id={id}
      name={name}
      menuIds={menu}
      reviewsIds={reviews}
    />
  )
};
