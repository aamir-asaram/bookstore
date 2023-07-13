import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Books.css';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ addBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      const bookObject = {
        id: uuidv4(),
        title,
        author,
        genre: 'Novel',
      };
      addBook(bookObject);
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

PropTypes.Form = {
  addBook: PropTypes.func.isRequired,
};

export default Form;
