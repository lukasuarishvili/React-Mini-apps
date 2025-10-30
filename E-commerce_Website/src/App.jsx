import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";


//  components
import Header from "./components/Header";


// pages
import HomePage from "./pages/HomePage";
import ProductDetailPages from './pages/ProductDetailPage'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/Product" element={<ProductDetailPages />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
