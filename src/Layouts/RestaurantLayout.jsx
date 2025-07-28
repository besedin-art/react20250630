import { useParams } from "react-router";
import { RestaurantContainer } from "../components/Restaurant/RestaurantContainer";

export const RestaurantLayout = () => {
  const params = useParams();
  return (
    <RestaurantContainer id={params.restaurantId} />
  );
}