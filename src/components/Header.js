import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import logo from '../assets/images/logo.png';

function Header() {
  return (
    <header style={headerStyle}>
      <Link to="/" style={logoContainerStyle}>
        <img src={logo} alt="ShopSmart Logo" style={logoStyle} />
      </Link>
      <nav style={navLinksStyle}>
        <Link to="/category/iphones" style={linkStyle}>Iphones</Link>
        <Link to="/category/andriods" style={linkStyle}>Andriods</Link>
        <Link to="/category/laptops" style={linkStyle}>Laptops</Link>
        <Link to="/category/accesories" style={linkStyle}>Accesories</Link>
        <Link to="/category/sales" style={linkStyle}>Sales</Link>
      </nav>
      <SearchBar />
      <Link to="/cart" className="cart-icon" style={cartStyle}>🛒</Link>
    </header>
  );
}

// Inline styles
const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2rem',
  backgroundColor: '#333',
  color: '#fff',
};

const logoContainerStyle = {
  textDecoration: 'none',
};

const logoStyle = {
  height: '40px', // Adjust the size as needed
};

const navLinksStyle = {
  display: 'flex',
  gap: '1.5rem',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '1rem',
};

const cartStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '1.5rem',
  marginLeft: '1rem',
};

export default Header;
