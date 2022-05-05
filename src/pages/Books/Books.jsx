import React from 'react';
import { useSelector } from 'react-redux';
import './style.css';
import BookItem from '../../components/BookItem/BookItem';
import AddBook from '../../components/AddBook/AddBook';

function Books() {
  const books = useSelector((state) => state.books);
  return (
    <div className="books">
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
      <AddBook />
    </div>
  );
}

export default Books;
