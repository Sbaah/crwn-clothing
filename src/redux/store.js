import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}
// if (process.env.NODE_ENV !== 'production') {
//     middleware.push(logger);
// }
/**
 * Is a combination of the root reducer and the middleware
 * for the logging the output of the what going on ...
 */
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
