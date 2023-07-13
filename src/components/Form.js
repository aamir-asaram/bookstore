import React from "react";
import { useState } from "react";
import './Books.css'
import { v4 as uuidv4 } from "uuid";

const Form = ({ addBook }) => {
  const [ title, setTitle ] = useState("");
  const [ author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('inner click')
    if (title && author) {
      console.log('insider')
      const bookObject = {
        id: uuidv4(),
        title: title,
        author: author,
        genre: "Novel",
      }
      addBook(bookObject);
      setTitle("");
      setAuthor("");
    } else {
      return;
    }
  };

  return (
    <div className="form">
      <h2>Add new book</h2>
      <form>
        <input type="text" placeholder="Title" onChange={(e) => {setTitle(e.target.value)}}/>
        <input type="text" placeholder="Author" onChange={(e) => {setAuthor(e.target.value)}}/>
        <input type="submit" value="Add book" className="btn" onClick={handleSubmit}/>
      </form>
    </div>
  );
};

export default Form;
