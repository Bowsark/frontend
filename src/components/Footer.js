import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <div>
        <p>&copy; {new Date().getFullYear()} ShopSmart. All rights reserved.</p>
      </div>
      <nav style={navStyle}>
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
        <a href="/privacy">Privacy Policy</a>
      </nav>
    </footer>
  );
}

const footerStyle = {
  padding: '1rem',
  backgroundColor: '#333',
  color: '#fff',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 'auto'
};

const navStyle = {
  display: 'flex',
  gap: '1rem'
};

export default Footer;
