import { DishListItem } from "../Dish/DishListItem";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { ReviewListItem } from "../Review/Review";
import { useUser } from "../UserContext/useUser";

export const Restaurant = ({ restaurant }) => {
  const { user } = useUser();

  return (
    <div style={{ backgroundColor: '#f4f4f4', padding: '10px' }}>
      <h2>{restaurant.name}</h2>
      <h3>Меню</h3>
      <ul>
        {restaurant.menu.map(dish => (
          <DishListItem dish={dish} key={dish.id} />
        ))}
      </ul>
      <h3>Отзывы</h3>
      {
        !!restaurant.reviews.length &&
        restaurant.reviews.map(review => (
          <ReviewListItem key={review.id} review={review} />
        ))
      }
      {
        !restaurant.reviews.length &&
        <div>Отзывов еще нет</div>
      }

      {
        user &&
        <>
          <h3>Оставить отзыв</h3>
          <ReviewForm />
        </>
      }

    </div>
  );
}