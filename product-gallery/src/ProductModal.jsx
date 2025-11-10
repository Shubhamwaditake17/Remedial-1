import React from 'react';
import './App.css'; // We'll add the modal styles here
import { FaStar, FaShoppingCart, FaTimes } from 'react-icons/fa';

function ProductModal({ product, onClose }) {
  // If no product is selected, don't render anything
  if (!product) {
    return null;
  }

  // This function stops the click from "bubbling" up to the overlay
  // Without this, clicking on the modal content would also close it
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    // The modal overlay (the dark background)
    // Clicking this overlay will close the modal
    <div className="modal-overlay" onClick={onClose}>
      
      {/* The modal content box */}
      <div className="modal-content" onClick={handleContentClick}>
        
        {/* The Close Button */}
        <button className="modal-close-btn" onClick={onClose}>
          <FaTimes />
        </button>

        {/* The modal body with a 2-column layout */}
        <div className="modal-body">
          <div className="modal-image-container">
            <img src={product.image} alt={product.name} className="modal-image" />
          </div>
          
          <div className="modal-details">
            <p className="product-category">{product.category}</p>
            <h2 className="modal-product-name">{product.name}</h2>
            
            <div className="product-rating">
              <FaStar />
              <span>{product.rating.toFixed(1)}</span>
            </div>
            
            <p className="modal-product-desc">
              {product.description}
            </p>
            
            <p className="modal-product-price">${product.price.toFixed(2)}</p>
            
            <button className="add-to-cart-btn modal-cart-btn">
              <FaShoppingCart /> 
              <span>Add to Cart</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProductModal;