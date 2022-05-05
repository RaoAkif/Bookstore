import { v4 as uuidv4 } from 'uuid';
import { fetchBooks, createBook, removeBook } from './booksApi';

const GET_BOOKS = 'bookstore/book/GET_BOOKS';
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const DELETE_BOOK = 'bookstore/books/DELETE_BOOK';

const initialState = [];

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_BOOKS:
      return [...action.payload];
    case ADD_BOOK:
      return [...state, action.payload];
    case DELETE_BOOK:
      return state.filter((book) => book.item_id !== action.id);
    default:
      return state;
  }
}

export const getBooks = () => async (dispatch) => {
  let books = [];
  try {
    books = await fetchBooks();
    dispatch({
      type: GET_BOOKS,
      payload: books,
    });
  } catch (err) {
    return err;
  }
  return books;
};

export const addBook = (book) => async (dispatch) => {
  try {
    const newBook = await createBook({ ...book, item_id: uuidv4() });
    dispatch({
      type: ADD_BOOK,
      payload: newBook,
    });
    return true;
  } catch (err) {
    return err;
  }
};

export const deleteBook = (id) => async (dispatch) => {
  try {
    await removeBook(id);
    dispatch({
      type: DELETE_BOOK,
      id,
    });
    return true;
  } catch (err) {
    return err;
  }
};
