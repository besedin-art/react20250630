import { Dish } from "../Dish/Dish";

export const Restaurant = ({ restaurant }) => {
  return (
    <div style={{ backgroundColor: '#f4f4f4', padding: '10px' }}>
      <h2>{restaurant.name}</h2>
      <h3>Меню</h3>
      <ul>
        {restaurant.menu.map(dish => (
          <Dish dish={dish} key={dish.id} />
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
    </div>
  );
}