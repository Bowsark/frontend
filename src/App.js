import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Header from './components/Header';
import Slideshow from './components/Slideshow';
import FeaturedProducts from './components/FeaturedProducts';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';  // Import your CartPage component
import './styles.css';  // Import your CSS file



// Adjusted imports for images
import dell3240 from './assets/images/Product/dell3240.jpg';
import hp840 from './assets/images/Product/hp840.jpg';
import lenovo1 from './assets/images/Product/lenovo1.jpg';
import hp845 from './assets/images/Product/hp845.jpg';
import A25 from './assets/images/Product/A25.jpg';
import A54 from './assets/images/Product/A54.jpg';

// Define featuredProducts array with imported images
const featuredProducts = [
  { id: 1, name: 'Dell Latitude E3420', price: '$600', image: dell3240, description: 'DELL Latitude 3420-14" FHD-11th Gen Intel Core I7-1165G7 Quad-Core-8GB RAM-256GB SSD-Black.' },
  { id: 2, name: 'Hp Elitebook 840 G6', price: '$500', image: hp840, description: 'A high-quality gadget.' },
  { id: 3, name: 'Lenovo Ideapad', price: '$650', image: lenovo1, description: 'Lenovo Ideapad 15 Inch Intel® Celeron 8GB RAM DDR4 - 256 SSD Windows 11' },
  { id: 4, name: 'Hp Elitebook 845 G7', price: '$700', image: hp845, description: 'A high-quality gadget.' },
  { id: 5, name: 'Samsung A25', price: '$100', image: A25, description: 'A high-quality gadget.' },
  { id: 6, name: 'Samsung A54', price: '$100', image: A54, description: 'A high-quality gadget.' },
];

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Header />
      <Slideshow />
      <FeaturedProducts />
      <Routes>
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />  {/* Define the route for the cart page */}
      </Routes>
      <Newsletter />
      <Footer />
    </Router>
  );
}

function ProductDetails() {
  const { productId } = useParams();
  const product = featuredProducts.find((p) => p.id === parseInt(productId, 10));

  return product ? (
    <ProductPage product={product} />
  ) : (
    <div>Product not found</div>
  );
}

export default App;
