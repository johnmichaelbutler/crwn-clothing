import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

// Our middlewares will be in an array which will be spread into applymiddlware in store
const middlewares = [logger];

// Allows us to only have logger middleware in development, not production
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

// Our store is created using createStore and is passed the root reducer and applymiddleware
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

export default { store, persistor };