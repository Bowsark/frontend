// Example in your HeroSection.js
import React from 'react';
import images from '../assets/images/image6.jpg';

function HeroSection() {
  return (
    <section style={{ backgroundImage: `url(${laptopImage})`, ...heroStyle }}>
      <h1>Welcome to ShopSmart</h1>
      <p>Your ultimate gadget destination</p>
    </section>
  );
}

const heroStyle = {
  height: '100vh',
  backgroundSize: 'cover',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
};

export default HeroSection;
