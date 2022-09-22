import React from "react";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./productCard.css";
import { useDispatch } from "react-redux";
import { addCartProduct } from "../../actions";

export const ProductCard = ({ product }) => {
  const { id, title, price, image } = product;

  const dispatch = useDispatch();
  
  return (
    <div className="cardContainer">
      <img src={image} alt="" className="cardImg"/>
      <div className="cardDesc">
        <div className="titleAndPrice">
          <h3>{title.length < 24 ? title : title.slice(0,23) + "..."}</h3>
          <p>$ {price}</p>
        </div>
        <Button onClick={() => {dispatch(addCartProduct({title: title, id: id, image: image, price: price}))}} sx={{ height: 63, borderRadius: 3, borderColor: "black"}} variant="outlined" color="error">
          <ShoppingCartIcon />
        </Button>
      </div>
    </div>
  );
};
