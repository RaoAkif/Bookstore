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

//
const ADD_BOOK = 'ADD_BOOK';
const DELETE_BOOK = 'DELETE_BOOK';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.data];
    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.data.id);
    default:
      return state;
  }
}

export function addBook(title = '', author = '') {
  const id = uuid;
  return {
    type: ADD_BOOK,
    data: { title, author, id },
  };
}

export function deleteBook(id) {
  return {
    type: DELETE_BOOK,
    id,
  };
}
