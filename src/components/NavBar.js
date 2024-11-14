import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav style={navbarStyle}>
      <Link to="/" style={logoStyle}>ShopSmart</Link>
      <div style={navLinksStyle}>
        <Link to="/products" style={linkStyle}>Products</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </div>
      <div style={actionsStyle}>
        <input type="text" placeholder="Search..." style={searchStyle} />
        <Link to="/cart" style={cartStyle}>🛒 Cart</Link>
      </div>
    </nav>
  );
}

// Styles for the Navbar
const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2rem',
  backgroundColor: '#333',
  color: '#fff',
};

const logoStyle = {
  fontSize: '1.5rem',
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 'bold',
};

const navLinksStyle = {
  display: 'flex',
  gap: '1.5rem',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
};

const actionsStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
};

const searchStyle = {
  padding: '0.5rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const cartStyle = {
  color: '#fff',
  textDecoration: 'none',
};

export default NavBar;
