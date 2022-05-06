import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const navBarLeft = {
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '6.25rem',
};

const navLinks = {
  listStyle: 'none',
  display: 'flex',
  color: 'azure',
};

function Header() {
  return (
    <div className="header">
      <div style={navBarLeft}>
        <h2 className="logo">Bookstore CMS</h2>
        <nav>
          <ul style={navLinks}>
            <li>
              <Link className="navLink" to="/">Books</Link>
            </li>
            <li>
              <Link className="navLink" to="/categories">Categories</Link>
            </li>
          </ul>
        </nav>
      </div>
      <i className="fa fa-solid fa-user" />
    </div>
  );
}

export default Header;
