import React from "react";
import Products from "./Products";
import product_img from "../assets/product.png";
import product_img2 from "../assets/product2.png";
import product_img3 from "../assets/product3.png";
import product_img4 from "../assets/product4.png";
import product_img5 from "../assets/product5.png";
import product_img6 from "../assets/product6.png";
import product_img7 from "../assets/product7.png";
import product_img8 from "../assets/product8.png";


const ProductsList = () => {
  const products = [
    {
      img: product_img,
      title: "Spiced Mint",
      price: "9.99$",
    },
    {
      img: product_img2,
      title: "Choco Bliss",
      price: "12.99$",
    },
    {
      img: product_img3,
      title: "Lemon Zest",
      price: "8.99$",
    },
    {
      img: product_img4,
      title: "Vanilla Dream",
      price: "10.49$",
    },
    {
      img: product_img5,
      title: "Berry Burst",
      price: "11.99$",
    },
    {
      img: product_img6,
      title: "Caramel Crunch",
      price: "13.49$",
    },
    {
      img: product_img7,
      title: "Peach Delight",
      price: "7.99$",
    },
    {
      img: product_img8,
      title: "Tropical Twist",
      price: "9.49$",
    },
    {
      img: product_img,
      title: "Mocha Magic",
      price: "14.99$",
    },
    {
      img: product_img2,
      title: "Cinnamon Swirl",
      price: "12.49$",
    },
    {
      img: product_img3,
      title: "Apple Crisp",
      price: "8.49$",
    },
    {
      img: product_img6,
      title: "Honey Glaze",
      price: "10.99$",
    },
    {
      img: product_img7,
      title: "Nutty Bliss",
      price: "13.99$",
    },
    {
      img: product_img2,
      title: "Minty Fresh",
      price: "7.49$",
    },
    {
      img: product_img5,
      title: "Citrus Splash",
      price: "9.79$",
    },
  ];

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {products.map((product, index) => (
        <Products key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
