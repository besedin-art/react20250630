import { DishListItemContainer } from "../Dish/DishListItemContainer";

export const RestaurantMenu = ({ menuIds }) => {
  return (
    <>
      <h3>Меню</h3>
      <ul>
        {!!menuIds.length &&
          menuIds.map(id => (
            <DishListItemContainer id={id} key={id} />
          ))
        }
      </ul>
    </>
  )
};
