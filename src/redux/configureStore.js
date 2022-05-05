import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const rootReducer = combineReducers({
  books: bookReducer,
  categories: categoryReducer,
});

const thunkMiddleware = applyMiddleware(thunk);

const store = configureStore({ reducer: rootReducer, thunkMiddleware });

export default store;
