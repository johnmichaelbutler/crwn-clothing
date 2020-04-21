import { createSelector } from 'reselect';

// input selector. Allows us to isolate the piece of that that we want
const selectCart = state => state.cart;

// Because we use createSelector, we are using memoization to make a selector.
// This makes it reusable but also avoids having to re render every time the state changes
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((acc, next) => acc + next.quantity, 0)
)

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (acc, nextItem) =>
        acc + (nextItem.price * nextItem.quantity)
      , 0
    )
)
