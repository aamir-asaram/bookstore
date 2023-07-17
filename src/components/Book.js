import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/bookSlice';

const Book = ({ book }) => {
  const { title, author, category } = book;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteBook(book.item_id));
  };

  return (
    <div className="book">
      <div className="info">
        <div className="genre">{category}</div>
        <div className="book-title">{title}</div>
        <div className="book-author">{author}</div>
      </div>
      <div className="buttons">
        <button type="button" className="btn btn-delete" onClick={handleClick}>Delete</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
