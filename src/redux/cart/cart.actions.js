import { CartActionTypes } from './cart.types';

// No need for payload because we are not using it. We are just using !hidden
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});