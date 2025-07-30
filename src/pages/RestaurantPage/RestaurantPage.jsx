import { useParams } from "react-router";
import { RestaurantContainer } from "../../components/Restaurant/RestaurantContainer";
import { Link } from "../../components/Link/Link";
import { Outlet } from "react-router";

export const RestaurantPage = () => {
  const { restaurantId } = useParams();
  return (
    <>
      <RestaurantContainer id={restaurantId} />
      <div>
        <Link to="menu">Меню</Link>
        <Link to="reviews">Отзывы</Link>
      </div>
      <Outlet />
    </>
  );
}