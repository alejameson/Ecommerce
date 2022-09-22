import React from "react";
import { Products } from "./component/Products/products";
import { Nav } from "./component/Nav/nav";
import { Cart } from "./component/Cart/cart";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Products />}>
          <Route index path="/products" element={<Products />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
