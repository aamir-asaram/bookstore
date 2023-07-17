import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import Form from './Form';
import './Books.css';
import { fetchBooks } from '../redux/books/bookSlice';

const Booklist = () => {
  const books = useSelector((state) => state.books.value);
  const { loading, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="booklist">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="booklist">
        <div className="error">{error}</div>
      </div>
    );
  }

  return (
    <>
      <div className="booklist">
        {books.map((book) => (<Book key={uuidv4()} book={book} />))}
      </div>
      <Form />
    </>

  );
};

export default Booklist;
