import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/entities/cart/slice";
import { CartListItem } from "../CartItem/CartListItem";

export const Cart = () => {
  const items = useSelector(selectCartItems);
  if (!items?.length) {
    return (
      <div>Корзина пуста</div>
    )
  }

  return (
    <ul>
      {items.map(({ id, amount }) => (
        <CartListItem key={id} dishId={id} amount={amount} />
      ))}
    </ul>
  )
};
