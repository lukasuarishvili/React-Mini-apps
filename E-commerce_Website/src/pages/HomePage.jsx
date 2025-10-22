import React from 'react'


// components
import Ad from '../components/Ad'
import Header from "../components/Header";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Arrivals from "../components/Arrivals";
import TopSelling from "../components/TopSelling";
import DressStyle from "../components/DressStyle";
import HappyCustomers from '../components/HappyCustomers';


function HomePage() {
    return (

        <>
            <Ad></Ad>

            <Header></Header>

            <Hero></Hero>

            <Banner></Banner>

            <Arrivals></Arrivals>

            <TopSelling></TopSelling>

            <DressStyle></DressStyle>

            <HappyCustomers></HappyCustomers>
        </>

    );
}

export default HomePage