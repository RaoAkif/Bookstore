import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './style.css';
import circularBar from '../../assets/images/circularBar.png';
import { deleteBook } from '../../redux/books/books';

function BookItem(props) {
  const dispatch = useDispatch();
  const { book } = props;
  return (
    <div className="item">
      <div className="book-details">
        <h5>{book.category}</h5>
        <h3>{book.title}</h3>
        <h6>{book.author}</h6>
        <div className="desc">
          <button type="button" className="btn">Comments</button>
          <button onClick={() => dispatch(deleteBook(book.item_id))} type="button" className="btn">Remove</button>
          <button type="button" className="btn">Edit</button>
        </div>
      </div>
      <div className="item-stats">
        <img src={circularBar} alt="circular-bar" />
        <div className="percentage">
          <h5>64%</h5>
          <p>Completed</p>
        </div>
      </div>
      <div className="book-status">
        <p>CURRENT CHAPTER</p>
        <p>Chapter 17</p>
        <button type="submit">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

export default BookItem;

BookItem.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
