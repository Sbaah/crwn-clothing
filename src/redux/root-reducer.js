/*
This will the sate reducer that represents everything about our application
Will be the actual code that combines all others states together
*/

import { combineReducers } from 'redux';
import useReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import { persistReducer } from 'redux-persist';
// local storage
import storage from 'redux-persist/lib/storage';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  user: useReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
