import { useState, useEffect, useContext, createContext } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";


// pages
import HomePage from "./pages/HomePage";
import ProductDetailPages from './pages/ProductDetailPage'
import Cart from "./pages/Cart";

// context
export let productContext = createContext();


function App() {


  return (
    <>
      <productContext.Provider value={productContext}>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="/Product" element={<ProductDetailPages />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </productContext.Provider>
    </>
  );
}

export default App;
