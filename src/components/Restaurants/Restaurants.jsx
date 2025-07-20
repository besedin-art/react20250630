import { Restaurant } from "../Restaurant/Restaurant";
import { useState } from "react";
import { TabItem } from "../TabItem/TabItem";

export const Restaurants = ({ restaurants }) => {
  const [current, setCurrent] = useState(restaurants[0].id);

  const activeRestaurant = restaurants.find(restaurant => restaurant.id === current);

  return (
    <>
      <div>
        {restaurants.map(({ id, name }) => (
          <TabItem
            key={id}
            isActive={id === current}
            onClick={() => setCurrent(id)}
          >
            {name}
          </TabItem>)
        )}
      </div>
      <div>
        {<Restaurant restaurant={activeRestaurant} key={activeRestaurant.id} />}
      </div>
      <div style={{ height: "1000px" }}></div>
    </>
  );
}