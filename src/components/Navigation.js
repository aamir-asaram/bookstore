import React from 'react';
import { Link } from 'react-router-dom';

const pages = [
  {
    id: '/',
    path: '/',
    name: 'Home',
  },
  {
    id: 'categories',
    path: '/categories',
    name: 'Categories',
  },
];

const Navigation = () =>
    <nav className="navbar">
      <h1>CMS Bookstore</h1>
      <ul className="nav-items">
        {pages.map((page) => (
          <li key={page.id}>
            <Link to={page.id}>{page.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
export default Navigation;
