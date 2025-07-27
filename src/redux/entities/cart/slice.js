import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {},
  reducers: {
    addToCart: (state, { payload }) => {
      const dishId = payload;
      state[dishId] = (state[dishId] || 0) + 1;
    },
    removeFromCart: (state, { payload }) => {
      const dishId = payload;
      state[dishId] = state[dishId] - 1;

      if (state[dishId] === 0) {
        delete state[dishId];
      }
    },
  },
  selectors: {
    selectCartItems: (state) => (
      Object.keys(state).reduce((acc, id) => {
        acc.push({ id, amount: state[id] });
        return acc;
      }, [])
    ),
    selectAmountById: (state, id) => {
      return state[id]
    }
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const { selectCartItems, selectAmountById } = cartSlice.selectors;