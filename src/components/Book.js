import React from "react";
import PropTypes from "prop-types";

const Book = ({ book }) => {
  const { title, author, genre } = book;

  const handleChange = (event) => {
    updateBookShelf(book, event.target.value);
  };

  return (
    <div className="book">
      <div className="genre">{genre}</div>
      <div className="book-title">{title}</div>
      <div className="book-author">{author}</div>
      <div className="buttons">
        <button className="btn btn-delete">Delete</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
