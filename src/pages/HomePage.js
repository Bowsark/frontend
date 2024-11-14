import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products data from API or static data
    setProducts([
      { id: 1, name: 'Dell Latitude E3420', price: '$600', image: dell3240, description: 'DELL Latitude 3420-14" FHD-11th Gen Intel Core I7-1165G7 Quad-Core-8GB RAM-256GB SSD-Black.' },
      { id: 2, name: 'Hp Elitebook 840 G6', price: '$500', image: hp840, description: 'A high-quality gadget.' },
      { id: 3, name: 'Lenovo Ideapad', price: '$650', image: lenovo1, description: 'Lenovo Ideapad 15 Inch Intel® Celeron 8GB RAM DDR4 - 256 SSD Windows 11' },
      { id: 4, name: 'Hp Elitebook 845 G7', price: '$700', image: hp845, description: 'A high-quality gadget.' },
      { id: 5, name: 'Samsung A25', price: '$100', image: A25, description: 'A high-quality gadget.' },
      { id: 6, name: 'Samsung A54', price: '$100', image: A54, description: 'A high-quality gadget.' },
    ]);
  }, []);

  return (
    <div className="home-page">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
