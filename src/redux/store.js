import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';

const middlewares = [logger];
/**
 * Is a combination of the root reducer and the middleware
 * for the loggin the output of the what going on ...
 */
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
