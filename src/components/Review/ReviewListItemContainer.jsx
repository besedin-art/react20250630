import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/reviews/slice";
import { ReviewListItem } from "./ReviewListItem";

export const ReviewListItemContainer = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id));

  if (!review?.text) return null;

  return (
    <ReviewListItem text={review.text} userId={review.userId} />
  )
};
