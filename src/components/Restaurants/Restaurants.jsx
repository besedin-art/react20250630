import { Restaurant } from "../Restaurant/Restaurant";
import { useState } from "react";

export const Restaurants = ({ restaurants }) => {
  const [current, setCurrent] = useState(restaurants[0].id);

  const activeRestaurant = restaurants.find(restaurant => restaurant.id === current);

  return (
    <>
      <div>
        {restaurants.map(({ id, name }) => <button key={id} disabled={id === current} onClick={() => setCurrent(id)}>{name}</button>)}
      </div>
      <div>
        {<Restaurant restaurant={activeRestaurant} />}
      </div>
    </>
  );
}