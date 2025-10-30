import React from 'react'

// components
import Ad from '../components/Ad'
import Header from '../components/Header'
import ProductInfo from '../components/ProductInfo'

// the data 
import data from '../deleteIt.json'

function ProductDetailPage() {


    return (
        <>
            <Ad />
            <Header />
            <ProductInfo productData={data[4]} />

            
        </>
    )
}

export default ProductDetailPage