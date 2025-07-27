import { TabItem } from "../TabItem/TabItem";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";

export const RestaurantTabContainer = ({ id, isActive, onClick }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) return null;

  return (
    <TabItem
      key={id}
      isActive={isActive}
      onClick={onClick}
    >
      {restaurant.name}
    </TabItem>
  )
};
