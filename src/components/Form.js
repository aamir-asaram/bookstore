import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './Books.css';
import { v4 as uuidv4 } from 'uuid';
import { addBookAsync } from '../redux/books/bookSlice';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    console.log('submit');
    e.preventDefault();
    if (title && author) {
      const bookObject = {
        item_id: uuidv4(),
        title,
        author,
        category: 'Fiction',
      };
      dispatch(addBookAsync(bookObject));
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div className="form">
      <h2>Add new book</h2>
      <form>
        <input type="text" placeholder="Title" onChange={(e) => { setTitle(e.target.value); }} />
        <input type="text" placeholder="Author" onChange={(e) => { setAuthor(e.target.value); }} />
        <input type="submit" value="Add book" className="btn" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default Form;
