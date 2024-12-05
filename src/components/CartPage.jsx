import React from 'react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cart } = useCart();

  return (
    <div className="container p-4">
      <h2 className="text-xl font-semibold">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="mt-4">
          {cart.map((product, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b">
              <img src={product.img} alt={product.title} className="w-16 h-16 object-cover" />
              <div>
                <p className="font-semibold">{product.title}</p>
                <p className="text-gray-500">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
