import React from 'react';
import './style.css';
import circularBar from '../../assets/images/circularBar.png';

function BookItem() {
  return (
    <div className="item">
      <div className="book-details">
        <h5>Economy</h5>
        <h3>Capital in the Twenty-First Century</h3>
        <h6>Suzanne Collins</h6>
        <div className="desc">
          <button type="button" className="btn">Comments</button>
          <button type="button" className="btn">Remove</button>
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
