const App = ({ restaurants }) => {
  return (
    <div>
      <h1>Restaurants</h1>
      {restaurants.map(restaurant => (
        <div key={restaurant.id} className="restaurant">
          <h2>{restaurant.name}</h2>
          <h3>Меню</h3>
          <ul>
            {restaurant.menu.map(dish => (
              <li key={dish.id}>{dish.name}</li>
            ))}
          </ul>
          <h3>Отзывы</h3>
          {restaurant.reviews.map(review => (
            <li key={review.id}>
              {review.user}: {review.text}
            </li>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;