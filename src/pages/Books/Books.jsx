import React from 'react';
import './style.css';
import BookItem from '../../components/BookItem/BookItem';
import AddBook from '../../components/AddBook/AddBook';

function Books() {
  return (
    <div className="books">
      <BookItem />
      <BookItem />
      <BookItem />
      <AddBook />
    </div>
  );
}

export default Books;
