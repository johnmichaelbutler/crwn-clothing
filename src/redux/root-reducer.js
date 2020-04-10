import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

// our root reducer is run through combineReducers which returns an object that
// has as a key the state object and the value as the reducer thar works on it
export default combineReducers({
  user: userReducer,
  cart: cartReducer
});