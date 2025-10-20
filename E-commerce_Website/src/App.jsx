import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";


// components
import Ad from './components/Ad'
import Header from "./components/Header";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Arrivals from "./components/ARRIVALS";
import TopSelling from "./components/TopSelling";
import DressStyle from "./components/DressStyle";

function App() {




  return (
    <>
      <Ad></Ad>

      <Header></Header>

      <Hero></Hero>

      <Banner></Banner>

      <Arrivals></Arrivals>

      <TopSelling></TopSelling>

      <DressStyle></DressStyle>
    </>
  );
}

export default App;
