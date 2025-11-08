import React from 'react'
import { useContext } from 'react'
import { productContext } from '../App'

// components
import Ad from '../components/Ad'
import Header from '../components/Header'
import ProductInfo from '../components/ProductInfo'
import ReviewSection from '../components/ReviewSection'
import Suggestion from '../components/Suggestion'
import Footer from '../components/Footer'
import Email from '../components/Email'



function ProductDetailPage() {

    let { chosenProduct } = useContext(productContext);
   
    return (
        <>
            <Ad />

            <Header />
            
            <ProductInfo productData={chosenProduct} />
    
            <Suggestion title="You might also like" borderTop={false} />

            <Email />

            <Footer />
        </>
    )
}

export default ProductDetailPage