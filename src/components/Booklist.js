import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';
import './Books.css';

const Booklist = () => {
  const books = useSelector((state) => state.books.value);

  return (
    <>
      <div className="booklist">
        {books.map((book) => <Book key={book.item_id} book={book} />)}
      </div>
      <Form />
    </>

  );
};

export default Booklist;
