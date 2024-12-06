import React from 'react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cart } = useCart();

  return (
    <div className="container mx-auto px-4 py-5">
      <h2 className="text-2xl font-bold mb-5">Your Cart</h2>
      {cart.length > 0 ? (
        <ul className="space-y-4">
          {cart.map((product, index) => (
            <li
              key={index}
              className="flex items-center justify-between border p-4 rounded-lg"
            >
              <div>
                <h3 className="font-semibold">{product.title}</h3>
                <p className="text-gray-500">{product.price}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
