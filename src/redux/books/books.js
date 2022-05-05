import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const DELETE_BOOK = 'bookstore/books/DELETE_BOOK';

const initialState = [
  {
    title: 'The Book Title One', author: 'Author One', category: 'Art and Style', id: uuidv4(),
  },
  {
    title: 'The Book Title Two', author: 'Author Two', category: 'Science', id: uuidv4(),
  },
  {
    title: 'The Book Title Three', author: 'Author Three', category: 'Fiction', id: uuidv4(),
  },
];

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}

export function addBook(book) {
  const id = uuidv4();
  return {
    type: ADD_BOOK,
    payload: {
      ...book,
      id,
    },
  };
}

export function deleteBook(id) {
  return {
    type: DELETE_BOOK,
    id,
  };
}
