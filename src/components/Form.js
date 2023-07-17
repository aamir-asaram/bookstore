import React, { useState } from 'react';
import './Books.css';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/bookSlice';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      const bookObject = {
        item_id: uuidv4(),
        title,
        author,
        category: 'Fiction',
      };
      dispatch(addBook(bookObject));
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div className="form">
      <h2>Add new book</h2>
      <form>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => { setTitle(e.target.value); }}
          value={title}
        />
        <input
          type="text"
          placeholder="Author"
          onChange={(e) => { setAuthor(e.target.value); }}
          value={author}
        />
        <button type="submit" onClick={handleSubmit}>Add book</button>
      </form>
    </div>
  );
};

export default Form;
