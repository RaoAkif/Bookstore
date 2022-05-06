import React, { useState } from 'react';
import './style.css';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';

function AddBook() {
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { target } = e;
    const title = target.title.value;
    const author = target.author.value;
    const category = target.category.value;
    dispatch(addBook({ title, author, category }));
    target.title.value = '';
    target.author.value = '';
    target.category.value = '';
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="add-book">
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" id="title" placeholder="Book Title" />
        <input type="text" name="author" id="author" placeholder="Book Author" />
        <select name="category" id="category" value={category} onChange={handleCategory} required>
          <option value="" defaultValue disabled>Category</option>
          <option value="Arts">Arts</option>
          <option value="Drama">Drama</option>
          <option value="Fiction">Fiction</option>
          <option value="Physics">Physics</option>
          <option value="Mathematics">Mathematics</option>
        </select>
        <button className="add-book-btn" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default AddBook;
