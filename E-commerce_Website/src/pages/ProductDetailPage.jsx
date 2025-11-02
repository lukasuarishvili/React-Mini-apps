import React from 'react'

// components
import Ad from '../components/Ad'
import Header from '../components/Header'
import ProductInfo from '../components/ProductInfo'
import ReviewSection from '../components/ReviewSection'
import Suggestion from '../components/Suggestion'
import Footer from '../components/Footer'
import Email from '../components/Email'

// the data 
import data from '../deleteIt.json'

function ProductDetailPage() {


    return (
        <>
            <Ad />
            <Header />
            <ProductInfo productData={data[6]} />

            <ReviewSection review={data[4].reviews} />

            <Suggestion title="You might also like" borderTop={false}/>


            <Email/>

            <Footer/>
        </>
    )
}

export default ProductDetailPage