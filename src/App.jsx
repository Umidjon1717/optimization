import React from 'react';
import { CartProvider } from './context/CartContext';
import ProductsList from './components/ProductsList';
import Header from './components/Header';
import CartPage from './components/CartPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
