import { combineReducers, configureStore } from 'redux';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const rootReducer = combineReducers({
  bookReducer,
  categoryReducer
})

const store = configureStore(rootReducer);

export default store;