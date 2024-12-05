import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { BsCartFill, BsCart } from 'react-icons/bs';

const Products = ({ product }) => {
  const { cart, addToCart } = useCart();
  const [isInCart, setIsInCart] = useState(() => {

    return cart.some((item) => item.title === product.title);
  });

  const handleToggleCart = () => {
    if (isInCart) {

      removeFromCart(product);
    } else {

      addToCart(product);
    }
    setIsInCart(!isInCart);
  };

  const removeFromCart = (productToRemove) => {

    addToCart((prevCart) =>
      prevCart.filter((item) => item.title !== productToRemove.title)
    );
  };

  return (
    <div className="relative container product-card border p-4 rounded-lg shadow-lg w-64 overflow-hidden transition-transform transform hover:shadow-xl hover:cursor-pointer group">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-30 transition-opacity"></div>

      <div
        className="absolute bottom-2 right-2 cursor-pointer"
        onClick={handleToggleCart}
      >
        {isInCart ? (
          <BsCartFill className="text-blue-500 w-8 h-8 hover:scale-110 transition-transform" />
        ) : (
          <BsCart className="text-gray-500 w-8 h-8 hover:scale-110 transition-transform" />
        )}
      </div>

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
