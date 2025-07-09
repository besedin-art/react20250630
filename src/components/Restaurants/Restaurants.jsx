import { Restaurant } from "../Restaurant/Restaurant";
import { useState } from "react";

export const Restaurants = ({ restaurants }) => {
  const [current, setCurrent] = useState(0);

  const selectRestaurant = (idx) => {
    if (current === idx) return;
    setCurrent(idx);
  }

  return (
    <>
      <div>
        {restaurants.map(({ id, name }, idx) => <button key={id} onClick={() => selectRestaurant(idx)}>{name}</button>)}
      </div>
      <div>
        {<Restaurant restaurant={restaurants[current]} />}
      </div>
    </>
  );
}