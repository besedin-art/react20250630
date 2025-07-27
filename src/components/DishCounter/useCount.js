import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, selectAmountById } from "../../redux/entities/cart/slice";

export const useCount = ({ min = 0, max = 5, dishId }) => {
  const amount = useSelector((state) => selectAmountById(state, dishId));
  const dispatch = useDispatch();

  const increment = useCallback(
    () => dispatch(addToCart(dishId)),
    [dishId, dispatch]
  );

  const decrement = useCallback(
    () => dispatch(removeFromCart(dishId)),
    [dishId, dispatch]
  );

  return {
    amount: amount || 0,
    increment,
    decrement,
  };
};