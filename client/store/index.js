import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import categories from './categories';
import products from './products';

const reducer = combineReducers({
  categories,
  products
})

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export default store;

export * from './products';
export * from './categories';