import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// This gives us access to our local storage object in our window in our browser
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import shopReducer from './shop/shop.reducer';
import directoryReducer from './directory/directory.reducer';


// JSOn object with config data for redux persist to use
const persistConfig = {
  key:'root',
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

// our root reducer is run through combineReducers which returns an object that
// has as a key the state object and the value as the reducer thar works on it
export default persistReducer(persistConfig, rootReducer);