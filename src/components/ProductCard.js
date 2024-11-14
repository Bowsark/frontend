import React from 'react';
//import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <p>{product.description}</p> {/* This is the description below the image */}
    </div>
  );
}

export default ProductCard;
