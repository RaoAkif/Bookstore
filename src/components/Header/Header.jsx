import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const navLinks = {
  listStyle: 'none',
  display: 'flex',
  color: 'azure',
};

function Header() {
  return (
    <div className="header">
      <div className="nav-bar-left">
        <h2 className="logo">Bookstore CMS</h2>
        <nav>
          <ul style={navLinks}>
            <li>
              <Link className="navLink" to="/">BOOKS</Link>
            </li>
            <li>
              <Link className="navLink" to="/categories">CATEGORIES</Link>
            </li>
          </ul>
        </nav>
      </div>
      <i className="fa fa-solid fa-user" />
    </div>
  );
}

export default Header;
