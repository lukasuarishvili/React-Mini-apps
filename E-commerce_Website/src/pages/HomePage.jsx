import React from 'react'


// components
import Ad from '../components/Ad'
import Header from "../components/Header";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Arrivals from "../components/Arrivals";
import TopSelling from "../components/TopSelling";
import Suggestion from '../components/Suggestion';
import DressStyle from "../components/DressStyle";
import HappyCustomers from '../components/HappyCustomers';
import Footer from '../components/Footer';
import Email from '../components/Email';



function HomePage() {
    return (

        <>
            <Ad></Ad>

            <Header></Header>

            <Hero></Hero>

            <Banner></Banner>

            <Suggestion title="NEW ARRIVALS" borderTop={false} />

            <Suggestion title="TOP SELLING" borderTop={true} />


            <DressStyle></DressStyle>

            {/* <HappyCustomers></HappyCustomers> */}

            <Email></Email>

            <Footer></Footer>


        </>

    );
}

export default HomePage