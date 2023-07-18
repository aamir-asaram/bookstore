import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import { deleteBookAsync } from '../redux/books/bookSlice';

const Book = ({ book }) => {
  const { title, author, category } = book;
  const dispatch = useDispatch();
  const handleRemoveBook = () => {
    dispatch(deleteBookAsync(book));
  };

  const percentage = Math.floor(Math.random() * 100);
  const chapter = Math.floor(Math.random() * 50);

  return (
    <div className="book">
      <div id="info">
        <div className="info">
          <div className="genre">{category}</div>
          <div className="book-title">{title}</div>
          <div className="book-author">{author}</div>
        </div>
        <div className="buttons">
          <button type="button" className="btn btn-comment">Comments</button>
          <button type="button" className="btn btn-delete" onClick={handleRemoveBook}>Remove</button>
          <button type="button" className="btn btn-edit">Edit</button>
        </div>
      </div>
      <div id="progress">
        <CircularProgressbar
          value={percentage}
          styles={{
            trail: {
              stroke: '#d6d6d6',
              strokeLinecap: 'butt',
              transformOrigin: 'center center',
            },
            path: {
              stroke: '#0290ff',
              strokeLinecap: 'butt',
              transition: 'stroke-dashoffset 0.5s ease 0s',
              transformOrigin: 'center center',
            },
          }}
        />
      </div>
      <div id="percentage">
        <div className="percentage">
          {percentage}
          %
        </div>
        <div className="completed">Completed</div>
      </div>
      <div id="chapter">
        <div className="chapter">CURRENT CHAPTER</div>
        <div className="chapter-number">
          Chapter&nbsp;
          {chapter}
        </div>
        <button type="button" className="btn btn-update">UPDATE PROGRESS</button>
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
