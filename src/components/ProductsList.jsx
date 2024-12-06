import React from 'react';
import Products from './Products';
import product_img from '../assets/product.png';
import product_img1 from '../assets/product8.png';
import product_img2 from '../assets/product2.png';
import product_img3 from '../assets/product3.png';
import product_img4 from '../assets/product5.png';
import product_img5 from '../assets/product4.png';
import product_img6 from '../assets/product6.png';
import product_img7 from '../assets/product7.png';

const ProductsList = () => {
  const products = [
    { img: product_img, title: 'Spiced Mint', price: '9.99$' },
    { img: product_img1, title: 'Choco Bliss', price: '12.99$' },
    { img: product_img2, title: 'Lemon Zest', price: '8.99$' },
    { img: product_img3, title: 'Berry Burst', price: '11.49$' },
    { img: product_img4, title: 'Vanilla Dream', price: '10.99$' },
    { img: product_img5, title: 'Mint Mojito', price: '7.99$' },
    { img: product_img6, title: 'Caramel Crunch', price: '14.99$' },
    { img: product_img7, title: 'Coconut Bliss', price: '12.49$' },
    { img: product_img2, title: 'Peach Paradise', price: '13.99$' },
  ];

  return (
    <div className="container mx-auto px-4 py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <Products key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
