import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions";
import { ProductCard } from "../ProductCard/productCard";
import "./products.css";

export const Products = () => {
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  });

  return (
    <div className="productsContainer">
      {products?.map((p, i) => (
        <div key={i}>
          <ProductCard product={p} />
        </div>
      ))}
    </div>
  );
};
