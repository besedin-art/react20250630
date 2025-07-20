export const ReviewListItem = ({review}) => {
  return (
    <li>
      {review.user}: {review.text}
    </li>
  )
};
