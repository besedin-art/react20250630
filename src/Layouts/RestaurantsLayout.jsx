import { Outlet } from "react-router";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../redux/entities/restaurants/slice";
import { RestaurantTabContainer } from "../components/RestaurantTab/RestaurantTabContainer";
import { RestaurantContainer } from "../components/Restaurant/RestaurantContainer";

export const RestaurantsLayout = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds)

  return (
    <>
      <div>
        {restaurantsIds?.map((id) => (
          <RestaurantTabContainer
            key={id}
            id={id}
          />
        ))}
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}