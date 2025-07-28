import { createSlice, createSelector } from "@reduxjs/toolkit";

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
    // selectCartItems: (state) => (
    //   Object.keys(state).reduce((acc, id) => {
    //     acc.push({ id, amount: state[id] });
    //     return acc;
    //   }, [])
    // ),
    selectAmountById: (state, id) => {
      return state[id]
    }
  }
});

const selectCartSlice = (state) => state[cartSlice.name];

export const selectCartItems = createSelector(
  [selectCartSlice],
  (cartSlice) => (
    Object.keys(cartSlice).reduce((acc, id) => {
      acc.push({ id, amount: cartSlice[id] });
      return acc;
    }, [])
  )
)

export const { addToCart, removeFromCart } = cartSlice.actions;
export const { selectAmountById } = cartSlice.selectors;