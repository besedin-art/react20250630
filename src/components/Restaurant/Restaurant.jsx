import { DishListItem } from "../Dish/DishListItem";
import { ReviewForm } from "../ReviewForm/ReviewForm";

export const Restaurant = ({ restaurant }) => {
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
          <li key={review.id}>
            {review.user}: {review.text}
          </li>
        ))
      }
      {
        !restaurant.reviews.length &&
        <div>Отзывов еще нет</div>
      }

      <h3>Оставить отзыв</h3>
      <ReviewForm />

    </div>
  );
}