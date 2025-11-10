import React from 'react';
import './App.css';
import { FaShoppingCart, FaStar } from 'react-icons/fa';

// Receive the new 'onAddToCart' prop
function ProductCard({ product, onProductClick, onAddToCart }) {

  const handleCartClick = (e) => {
    e.stopPropagation(); // Stop click from opening modal
    
    // --- CALL THE NEW FUNCTION FROM APP ---
    onAddToCart(product);
  };

  return (
    <div className="product-card" onClick={() => onProductClick(product)}>
      
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-image" 
        />
        {product.isNew && <span className="product-badge">New</span>}
      </div>
      
      <div className="product-info">
        <p className="product-category">{product.category}</p>
        
        <h3 className="product-name">{product.name}</h3>
        
        <div className="product-rating">
          <FaStar />
          <span>{product.rating.toFixed(1)}</span>
        </div>
        
        <p className="product-price">${product.price.toFixed(2)}</p>
        
        {/* This button now calls handleCartClick */}
        <button className="add-to-cart-btn" onClick={handleCartClick}>
          <FaShoppingCart /> 
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;