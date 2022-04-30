import React from 'react';
import './style.css';

function AddBook() {
  return (
    <div className="add-book">
      <h3>ADD NEW BOOK</h3>
      <form action="">
        <input type="text" name="Title" id="title" placeholder="Book title" />
        <select name="Category" id="category">
          <option value="" selected disabled hidden>Category</option>
          <option value="science">Science</option>
          <option value="arts">Arts</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default AddBook;
