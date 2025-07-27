import { useSelector } from "react-redux";
import { useState } from "react";
import { Restaurant } from "../Restaurant/Restaurant";
import { TabItem } from "../TabItem/TabItem";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/slice";
import { RestaurantTabContainer } from "../RestaurantTab/RestaurantTabContainer";
import { RestaurantContainer } from "../Restaurant/RestaurantContainer";

export const Restaurants = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds)
  const [currentRestaurantId, setCurrentRestaurantId] = useState(restaurantsIds?.[0]);

  return (
    <>
      <div>
        {restaurantsIds?.map((id) => (
          <RestaurantTabContainer
            key={id}
            id={id}
            isActive={id === currentRestaurantId}
            onClick={() => setCurrentRestaurantId(id)} />
        ))}
      </div>
      <div>
        {currentRestaurantId && <RestaurantContainer id={currentRestaurantId} />}
      </div>
      <div style={{ height: "1000px" }}></div>
    </>
  );
}