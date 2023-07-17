import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import Form from './Form';
import './Books.css';
import { fetchBooks } from '../redux/books/bookSlice';

const Booklist = () => {
  const books = useSelector((state) => state.books.value);
  const dispatch = useDispatch();
  console.log(books);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <>
      <div className="booklist">
        {books.map((book) => ( <Book key={uuidv4()} book={book} /> ))}
      </div>
      <Form />
    </>

  );
};

export default Booklist;
