import React, { useEffect } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Book from "./Book";
import Form from "./Form";
import './Books.css'

const Booklist = () => {
  const [ books, setBooks ]  = useState([
    {
      id: uuidv4(),
      title: "The Alchemist",
      author: "Paulo Coelho",
      genre: "Adventure",
    },
    {
      id: uuidv4(),
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
    },
    {
      id: uuidv4(),
      title: "The Little Prince",
      author: "Antoine de Saint-Exupery",
      genre: "Novel",
    },
  ]);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const addBook = (book) => {
    console.log('click');
    setBooks([...books, book]);
    console.log(books);
    localStorage.setItem('books', JSON.stringify(books));
  };

  const removeBook = (id) => {
    console.log(books, id)
    setBooks(books.filter((book) => book.id !== id));
    localStorage.setItem('books', JSON.stringify(books));
    console.log(books)
  };

  return (
    <>
      <div className="booklist">
        {books.map((book) => {
          return (
            <Book key={book.id} book={book} removeBook={removeBook}/>
          );
        })}
      </div>
      <Form addBook={addBook}/>
    </>

  );
};

export default Booklist;