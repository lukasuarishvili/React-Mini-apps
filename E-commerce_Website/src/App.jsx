import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";





// pages
import HomePage from "./pages/HomePage";
import ProductDetailPages from './pages/ProductDetailPage'
import Cart from "./pages/Cart";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/Product" element={<ProductDetailPages />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
