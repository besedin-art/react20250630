import { Outlet } from "react-router";
import { useSelector } from "react-redux";
import { useState } from "react";
import { selectRestaurantsIds } from "../redux/entities/restaurants/slice";
import { RestaurantTabContainer } from "../components/RestaurantTab/RestaurantTabContainer";
import { RestaurantContainer } from "../components/Restaurant/RestaurantContainer";

export const RestaurantsLayout = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds)
  const [currentRestaurantId, setCurrentRestaurantId] = useState(null);

  return (
    <>
      <div>
        {restaurantsIds?.map((id) => (
          <RestaurantTabContainer
            key={id}
            id={id}
            isActive={id === currentRestaurantId}
          // onClick={() => setCurrentRestaurantId(id)}
          />
        ))}
      </div>
      <div>
        <Outlet />
        {/* {currentRestaurantId && <RestaurantContainer id={currentRestaurantId} />} */}
      </div>
      <div style={{ height: "1000px" }}></div>
    </>
  );
}