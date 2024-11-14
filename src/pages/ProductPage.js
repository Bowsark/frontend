import React from 'react';
import './ProductPage.css'; // Create a CSS file to style this component

function ProductPage({ product }) {
    return (
      <div className="product-page">
        <img src={product.image} alt={product.name} />
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <button>Add to Cart</button>
      </div>
    );
  }
  
  export default ProductPage;
