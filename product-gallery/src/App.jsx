// Import useState and the cart icon
import React, { useState } from 'react'; 
import { FaShoppingCart } from 'react-icons/fa'; // Import for header icon
import './App.css';
import ProductCard from './ProductCard.jsx'; 
import ProductModal from './ProductModal.jsx';

// Updated products array with real images
const products = [
  {
    id: 1,
    name: 'Classic T-Shirt',
    price: 25.00,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop',
    category: 'Apparel',
    rating: 4.5,
    isNew: true,
    description: 'A classic, comfortable t-shirt made from 100% premium cotton. Perfect for everyday wear.'
  },
  {
    id: 2,
    name: 'Leather Jacket',
    price: 150.00,
    image: 'https://images.unsplash.com/photo-1551028719-00160cdae063?w=800&auto=format&fit=crop',
    category: 'Jackets',
    rating: 4.8,
    isNew: false,
    description: 'A stylish and durable leather jacket. Features a timeless design with a modern fit.'
  },
  {
    id: 3,
    name: 'Slim Fit Jeans',
    price: 60.00,
    image: 'https://images.unsplash.com/photo-1602293589914-1cf168923f39?w=800&auto=format&fit=crop',
    category: 'Apparel',
    rating: 4.2,
    isNew: false,
    description: 'High-quality slim fit jeans that offer both comfort and style. Made with stretch-denim.'
  },
  {
    id: 4,
    name: 'Running Sneakers',
    price: 85.00,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ab?w=800&auto=format&fit=crop',
    category: 'Footwear',
    rating: 4.7,
    isNew: true,
    description: 'Lightweight and breathable running sneakers, perfect for your morning jog or hitting the gym.'
  },
  {
    id: 5,
    name: 'Wool Beanie',
    price: 18.00,
    image: 'https://images.unsplash.com/photo-1576403212623-68b48aaabc63?w=800&auto=format&fit=crop',
    category: 'Accessories',
    rating: 4.0,
    isNew: false,
    description: 'Keep warm with this soft, 100% wool beanie. A stylish accessory for cold weather.'
  },
  {
    id: 6,
    name: 'Sunglasses',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&auto=format&fit=crop',
    category: 'Accessories',
    rating: 4.6,
    isNew: true,
    description: 'Protect your eyes with these UV400 polarized sunglasses, featuring a classic frame.'
  },
];


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // --- NEW CART STATE ---
  const [cart, setCart] = useState([]);

  // --- NEW FUNCTION TO ADD TO CART ---
  const addToCart = (product) => {
    // We use a function here to get the most recent state
    setCart(prevCart => [...prevCart, product]);
    console.log('Cart:', cart.length + 1, 'items');
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="App">
      {/* --- UPDATED HEADER --- */}
      <header className="app-header">
        <h1>My E-Commerce Store</h1>
        <div className="header-cart">
          <FaShoppingCart className="cart-icon" />
          {/* Show count only if cart has items */}
          {cart.length > 0 && (
            <span className="cart-count">{cart.length}</span>
          )}
        </div>
      </header>
      
      <main>
        <h2>Product Gallery</h2>
        <div className="product-gallery">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onProductClick={openModal}
              onAddToCart={addToCart} // Pass the function as a prop
            />
          ))}
        </div>
      </main>
      
      <footer className="app-footer">
        <p>© 2025 My E-Commerce Store</p>
      </footer>
      
      {isModalOpen && (
        <ProductModal 
          product={selectedProduct} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
}

export default App;