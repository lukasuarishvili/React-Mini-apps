import React, { useContext } from 'react'
import { useState } from 'react'

// images
import star from '../../assets/star.png'
import HalfStar from '../../assets/star-half48.png'
import Yes from '../../assets/y.png'
import plus from '../../assets/plus.png'
import minus from '../../assets/minus.png'

// components
import ReviewSection from './ReviewSection'


// context
import { productContext } from '../../App'


function ProductInfo({ productData }) {
    // adding it to the cart
    let { CartItem, setCartitems } = useContext(productContext);

    // thechosenProducts data
    let { chosenProduct, setChosenProduct } = useContext(productContext);


    let [productCount, setProductCount] = useState(1)

    let rateing = productData.rate
    const reviews = productData.reviews
    const rate = parseFloat(rateing);

    const stars = [];


    for (let i = 1; i <= Math.floor(rate); i++) {
        stars.push(<img src={star} alt="star" className='w-7 h-7' />);
    }


    if (rate % 1 >= 0.5) {
        stars.push(<img src={HalfStar} alt="halfstar" className='w-7 h-7' />);
    }


    return (
        <>

            <section className=' w-full flex flex-col justify-center items-center px-12'>
                <div className='w-fit border-t-2 border-gray-500 flex flex-col gap-5  '>
                    <h5>{"Home>Shop>Men>T-shirts"}</h5>

                    <div className='flex flex-col md:flex-row lg:flex-row justify-center items-center gap-7 px-1'>


                        {/* three smalll images */}
                        <div className='flex flex-row md:flex-col lg:flex-col gap-3 max-w-fit'>
                            <img
                                src={productData.imgList[0]}
                                alt="img list 1"
                                className="w-[111px] h-[106px] md:w-[152px] md:h-[167px]  rounded-[20px]"
                            />
                            <img
                                src={productData.imgList[1]}
                                alt="img list 2"
                                className="w-[111px] h-[106px] md:w-[152px] md:h-[167px] rounded-[20px]"
                            />
                            <img
                                src={productData.imgList[2]}
                                alt="img list 3"
                                className="w-[111px] h-[106px]  md:w-[152px] md:h-[167px]  rounded-[20px]"
                            />
                        </div>

                        {/* main big image */}
                        <div className=' h-auto '>
                            <img src={productData.imgList[0]} alt="main images" className='max-w-[444px] max-h-[530px]  min-w-full min-h-autp    rounded-[20px]' />
                        </div>

                        {/* products info */}
                        <div className=' flex flex-col gap-1  '>
                            <h1 className=' md:text-[40px] lg:text-[40px] font-bold'>{productData.title}</h1>
                            <div className='flex flex-row gap-2 items-center'>
                                <div className='flex'>
                                    {stars}
                                </div>
                                <p className='text-gray-500 text-lg'>{rate}</p>
                            </div>
                            <h3 className='text-[32px] font-bold'>{productData.price}</h3>

                            <p className='text-gray-500 text-[16px] mb-2'>{productData.desc}</p>

                            {/*selecting  colors */}
                            <div className='flex flex-col border-t-[1px] border-gray-300 py-2.5 gap-3'>
                                <h4 className='text-gray-500'>Select Colors</h4>
                                <div className='flex gap-2 '>
                                    <button className='p-2 text-white rounded-[50%]' style={{ backgroundColor: productData.colorList[0] }}>
                                        <img src={Yes} alt="yes" className='w-4 h-4' />
                                    </button>

                                    <div className='p-2 text-white rounded-[50%]' style={{ backgroundColor: productData.colorList[1] }}>
                                        <img src={Yes} alt="yes" className='w-4 h-4' />
                                    </div>

                                    <div className='p-2 text-white rounded-[50%]' style={{ backgroundColor: productData.colorList[2] }}>
                                        <img src={Yes} alt="yes" className='w-4 h-4' />
                                    </div>

                                </div>

                            </div>

                            <div className='flex flex-col border-t-[1px] border-gray-300 py-2.5 gap-3 '>
                                <h4 className='text-gray-500'>Choose Size</h4>
                                <div className='flex gap-[12px] '>
                                    <button className='px-[24px] py-[12px] rounded-[62px]   bg-[#b4b4b4] opacity-60 hover:bg-gray-900 hover:text-white'>
                                        small
                                    </button>
                                    <button className='px-[24px] py-[12px] rounded-[62px]   bg-[#b4b4b4] opacity-60 hover:bg-gray-900 hover:text-white'>
                                        Medium
                                    </button>
                                    <button className='px-[24px] py-[12px] rounded-[62px]   bg-[#b4b4b4] opacity-60 hover:bg-gray-900 hover:text-white'>
                                        Large
                                    </button>
                                    <button className='px-[24px] py-[12px] rounded-[62px]   bg-[#b4b4b4] opacity-60 hover:bg-gray-900 hover:text-white'>
                                        X-Large
                                    </button>
                                </div>

                            </div>

                            <div className='flex flex-col border-t-[1px] border-gray-300 py-2.5'>

                                <div className='flex gap-5 min-w-max '>

                                    <div className='min-w-fit flex py-4 px-5 gap-6 items-center  bg-[#b4b4b4] opacity-60 rounded-[62px]'>

                                        <button onClick={() => { setProductCount(productCount - 1) }}>
                                            <img src={minus} alt="decrement" className='w-5 h-5' />
                                        </button>

                                        <p className='text-l'>{productCount}</p>


                                        <button onClick={() => { setProductCount(productCount + 1) }}>
                                            <img src={plus} alt="increment" className='w-5 h-5' />
                                        </button>
                                    </div>

                                    <button className='bg-black text-white py-4 px-[54px] rounded-[62px] w-full hover:bg-gray-700 '
                                        onClick={() => {
                                            setCartitems([ chosenProduct])
                                            console.log(chosenProduct)
                                        }}>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <ReviewSection reviews={reviews} />
        </>
    )
}

export default ProductInfo
