import React, { useEffect, useState } from 'react';
import './FeaturedProducts.css';
import dell3240 from '../assets/images/Product/dell3240.jpg';
import hp840 from '../assets/images/Product/hp840.jpg';
import lenovo1 from '../assets/images/Product/lenovo1.jpg';
import hp845 from '../assets/images/Product/hp845.jpg';
import A25 from '../assets/images/Product/A25.jpg';
import A54 from '../assets/images/Product/A54.jpg';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import axios from 'axios';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  // Fetch featured products from the backend
  useEffect(() => {
    axios.get('http://localhost:5000/api/products/featured')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching featured products:', error));
  }, []);

  // List of hardcoded products for display
  const featuredProducts = [
    { id: 1, name: 'Dell Latitude E3420', price: '$600', image: dell3240, description: 'DELL Latitude 3420-14" FHD-11th Gen Intel Core I7-1165G7 Quad-Core-8GB RAM-256GB SSD-Black.' },
    { id: 2, name: 'Hp Elitebook 840 G6', price: '$500', image: hp840, description: 'A high-quality gadget.' },
    { id: 3, name: 'Lenovo Ideapad', price: '$650', image: lenovo1, description: 'Lenovo Ideapad 15 Inch Intel® Celeron 8GB RAM DDR4 - 256 SSD Windows 11' },
    { id: 4, name: 'Hp Elitebook 845 G7', price: '$700', image: hp845, description: 'A high-quality gadget.' },
    { id: 5, name: 'Samsung A25', price: '$100', image: A25, description: 'A high-quality gadget.' },
    { id: 6, name: 'Samsung A54', price: '$100', image: A54, description: 'A high-quality gadget.' },
  ];

  // Add hardcoded products to the database
  const addProductToDatabase = async (product) => {
    try {
      const response = await axios.post('http://localhost:5000/api/products', product);
      console.log('Product added:', response.data);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  // Add all products to the database
  const handleAddProducts = () => {
    featuredProducts.forEach(product => addProductToDatabase(product));
  };

  return (
    <div className="featured-products">
      <h2>Featured Products</h2>
      <button onClick={handleAddProducts}>Add Products to Database</button>
      <div className="product-list">
        {products.map(product => (
          <Link to={`/product/${product.id}`} key={product.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
