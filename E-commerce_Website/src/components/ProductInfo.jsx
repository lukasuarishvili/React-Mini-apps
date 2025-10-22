import React from 'react'


// images
import star from '../assets/star.png'
import HalfStar from '../assets/star-half48.png'




function ProductInfo({ productData }) {

    let rateing = productData.rate

    const rate = parseFloat(rateing);
    const stars = [];


    for (let i = 1; i <= Math.floor(rate); i++) {
        stars.push(<img src={star} alt="star" className='w-7 h-7' />);
    }


    if (rate % 1 >= 0.5) {
        stars.push(<img src={HalfStar} alt="halfstar" className='w-7 h-7' />);
    }


    return (
        <section className=' w-full flex flex-col justify-center items-center px-1'>
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
                        <img src={productData.imgList[0]} alt="main images" className='w-full h-full rounded-[20px]' />
                    </div>

                    {/* products info */}
                    <div className='w-max flex flex-col '>
                        <h1 className=' md:text-[40px] lg:text-[40px] font-bold'>{productData.title}</h1>
                        <div className='flex flex-row gap-2 items-center'>
                            <div className='flex'>
                                 {stars}
                            </div>
                            <p className='text-gray-500 text-lg'>{rate}</p>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default ProductInfo
