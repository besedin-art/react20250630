import { ReviewForm } from "../ReviewForm/ReviewForm";
import { useUser } from "../UserContext/useUser";
import { DishListItemContainer } from "../Dish/DishListItemContainer";
import { ReviewListItemContainer } from "../Review/ReviewListItemContainer";

export const Restaurant = ({ id, name, menuIds, reviewsIds }) => {
  const { user } = useUser();

  return (
    <div style={{ backgroundColor: '#f4f4f4', padding: '10px' }}>
      <h2>{name}</h2>
      <h3>Меню</h3>
      <ul>
        {!!menuIds.length &&
          menuIds.map(id => (
            <DishListItemContainer id={id} key={id} />
          ))
        }
      </ul>
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
        user &&
        <>
          <h3>Оставить отзыв</h3>
          <ReviewForm />
        </>
      }

    </div>
  );
}