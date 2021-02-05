/*
This will the sate reducer that represents everything about our application
Will be the actual code that combines all others states together
*/

import { combineReducers } from 'redux';
import { useReducer } from './user/user.reducer';

export default combineReducers({
  user: useReducer,
});
