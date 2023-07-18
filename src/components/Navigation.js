import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="navbar">
    <h1>CMS Bookstore</h1>
    <ul className="nav-items">
      <li key="/">
        <Link to="/" className="active">Home</Link>
      </li>
      <li key="categories">
        <Link to="categories">Categories</Link>
      </li>
    </ul>
    <div className="profile">
      <i className="fas fa-user" />
    </div>
  </nav>
);

export default Navigation;
