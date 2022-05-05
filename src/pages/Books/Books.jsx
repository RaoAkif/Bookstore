import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './style.css';
import BookItem from '../../components/BookItem/BookItem';
import AddBook from '../../components/AddBook/AddBook';
import { getBooks } from '../../redux/books/books';

function Books() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div className="books">
      {books.map((book) => (
        <BookItem key={book.item_id} book={book} />
      ))}
      <AddBook />
    </div>
  );
}

export default Books;
