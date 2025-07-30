import { useUser } from "../UserContext/useUser";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import { RestaurantReviews } from "./RestaurantReviews";

export const RestaurantReviewsContainer = () => {
  const { restaurantId } = useParams();
  const { user } = useUser();
  const { reviews } = useSelector((state) => selectRestaurantById(state, restaurantId));
  return (
    <RestaurantReviews reviewsIds={reviews} showReviewForm={!!user} />
  )
};
