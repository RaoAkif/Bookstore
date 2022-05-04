function makeIdWithLength(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const uuid = makeIdWithLength(20);
// console.log(uuid);

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const DELETE_BOOK = 'bookstore/books/DELETE_BOOK';

const initialState = [
  { title: 'Book One', author: 'Author One', id: uuid },
  { title: 'Book Two', author: 'Author Two', id: uuid },
  { title: 'Book Three', author: 'Author Three', id: uuid },
];

export default function reducer(action = {}, state = initialState) {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [action.payload],
      };
    case DELETE_BOOK:
      return [
        ...state.filter((book) => book.id !== action.payload),
      ];
    default:
      return state;
  }
}

export function addBook(title = '', author = '') {
  const id = uuid;
  return {
    type: ADD_BOOK,
    payload: { title, author, id },
  };
}

export function deleteBook(id) {
  return {
    type: DELETE_BOOK,
    payload: id,
  };
}
