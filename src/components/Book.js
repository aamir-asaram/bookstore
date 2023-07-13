import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, removeBook }) => {
  const { title, author, genre } = book;

  const handleClick = () => {
    removeBook(book.id);
  };

  return (
    <div className="book">
      <div className="info">
        <div className="genre">{genre}</div>
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
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
