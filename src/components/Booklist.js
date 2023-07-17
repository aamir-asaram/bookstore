import React from 'react';
import Book from './Book';
import Form from './Form';
import './Books.css';
import { useSelector } from 'react-redux';

const Booklist = () => {
  const books = useSelector((state) => state.books.value);

  return (
    <>
      <div className="booklist">
        {books.map((book) => <Book key={book.item_id} book={book}  />)}
      </div>
      <Form  />
    </>

  );
};

export default Booklist;
