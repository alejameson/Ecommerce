import React from 'react';
import { Products } from './component/Products/products';
import {Route, Routes} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/products" element={<Products />} />
          {/* <Route path="/cart" element={<Home />} /> */}
        </Routes>
    </div>
  );
}

export default App;
