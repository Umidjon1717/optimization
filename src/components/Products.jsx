import React from 'react';
import { useCart } from '../context/CartContext';
import cart from '../assets/cart.png';


const Products = ({ product }) => {
  const { addToCart } = useCart(); 

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="relative container product-card border p-4 rounded-lg shadow-lg w-64 overflow-hidden transition-transform transform  hover:shadow-xl hover:cursor-pointer group">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-30 transition-opacity"></div>


      <img
        src={cart}
        alt="cart"
        className="absolute bottom-2 right-2 w-8 h-8 cursor-pointer hover:scale-110 transition-transform group-hover:scale-125"
        onClick={handleAddToCart} 
      />

      <img
        src={product.img}
        alt={product.title}
        className="w-full h-48 object-cover rounded-t-lg group-hover:opacity-80 transition-opacity"
      />


      <div className="product-info mt-4 group-hover:text-gray-100 transition-colors">
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-gray-500">{product.price}</p>
      </div>
    </div>
  );
};

export default Products; 