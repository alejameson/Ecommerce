import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ProductCard } from "../ProductCard/productCard";
import "./cart.css";

export const Cart = () => {
  const [total, setTotal] = useState(0);
  const cartProducts = useSelector((state) => state.cartProducts);

  useEffect(() => {
    if (cartProducts) {
      let sum = cartProducts
        .map((item) => item.price)
        .reduce((prev, curr) => prev + curr, 0);
      setTotal(sum);
    }
  }, [cartProducts]);

  console.log(total, "TOTAL");

  return (
    <div className="productsContainer">
      <div className="totalContainer">
        <h1>El total es : ${total}</h1>
      </div>
      {cartProducts?.map((p, i) => (
        <div key={i}>
          <ProductCard product={p} />
        </div>
      ))}
    </div>
  );
};
