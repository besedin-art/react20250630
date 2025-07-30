import { ReviewListItemContainer } from "../Review/ReviewListItemContainer";
import { ReviewForm } from "../ReviewForm/ReviewForm";

export const RestaurantReviews = ({ reviewsIds, showReviewForm }) => {
  return (
    <>
      <h3>Отзывы</h3>
      {
        !!reviewsIds.length &&
        reviewsIds.map(id => (
          <ReviewListItemContainer id={id} key={id} />
        ))
      }
      {
        !reviewsIds.length &&
        <div>Отзывов еще нет</div>
      }

      {
        showReviewForm &&
        <>
          <h3>Оставить отзыв</h3>
          <ReviewForm />
        </>
      }
    </>
  )
};
