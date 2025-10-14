import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// images
import Cart from "./assets/Cart.png";
import userLogo from "./assets/user_logo.png";
import threeLine from "./assets/three_Lines.png";
import down_arrow from "./assets/down_arrow.png";
import HomePageBg from "./assets/HomePageBg.jpg";
import calvin from "./assets/companes/Calvin_clein.png";
import versel from "./assets/companes/versel.png";
import zara from "./assets/companes/zara-logo-1 1.png";
import prada from "./assets/companes/prada-logo-1 1.png";
import gucci from "./assets/companes/gucci-logo-1 1.png";

function App() {
  return (
    <div>
      <div className="w-full bg-black text-white flex justify-center items-center gap-1 text-center flex-wrap py-1.5">
        <p>Sign up and get 20% off your first order.</p>
        <a href="#" className=" underline ">
          Sign Up Now
        </a>
      </div>

      <header className="w-full flex items-center justify-center  gap-10 py-7 sm:px-3">
        <button>
          <img
            src={threeLine}
            alt="three lines"
            className="w-6 lg:hidden md:hidden"
          />
        </button>
        <h1 className="text-black font-bold text-[32px]">SHOP.CO</h1>

        <nav className="hidden md:flex items-center gap-6 text-gray-800 font-medium ">
          <div className="flex items-center gap-0.5 justify-center">
            <a href="#" className="text-black">
              Shop
            </a>
            <img src={down_arrow} alt="down arrrow" className="w-4 h-4" />
          </div>

          <a href="#" className="text-black">
            On Sale
          </a>
          <a href="#" className="text-black">
            New Arrivals
          </a>
          <a href="#" className="text-black">
            Brands
          </a>
        </nav>

        <div className=" flex items-center bg-[#F0F0F0] rounded-full px-4 py-2 w-1/3">
          <input
            type="text"
            placeholder=" Search for products..."
            className="bg-transparent outline-none ml-2 lg:max-w-[577px] text-sm text-gray-700"
          />
        </div>

        <section className="flex items-center gap-4">
          <img src={Cart} alt="Cart" className="w-6" />
          <img src={userLogo} alt="User" className="w-6" />
        </section>
      </header>
      <main className="bg-[#F2F0F1] flex flex-coljustify-between items-center w-full h-fit p-9">
        <section className="w-1/2 gap-2 flex flex-col justify-start items-start ">
          <div>
            <h3 className=" text-7xl font-bold">
              FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE{" "}
            </h3>
          </div>

          <p className="text-[#00000099]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="bg-black rounded-[62px] text-white py-[16px] px-[58px]">
            Shop Now
          </button>
        </section>

        <section className="w-1/2 flex justify-end ">
          <img
            src={HomePageBg}
            alt="background"
            className="max-w-full h-auto object-contain"
          />
        </section>
      </main>
      <section className=" flex justify-center items-center gap-8.5 flex-wrap bg-black px-3 py-5">
        <img src={versel} alt="versel" className="w-[166px] h-[32px]" />
        <img src={zara} alt="zara" className="w-[91px] h-[38px]" />
        <img src={gucci} alt="gucci" className="w-[156px] h-[36px" />
        <img src={prada} alt="prada" className="w-[194px] h-[32px]" />
        <img src={calvin} alt="calvin" className="w-[206px] h-[33px]" />
      </section>
    </div>
  );
}

export default App;
