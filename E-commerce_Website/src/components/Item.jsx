import React from 'react'

// images
import star from '../assets/star.png'
import HalfStar from '../assets/star-half48.png'

function Item(item) {

    const { name, image, price, rateing, disscount } = item


    const rate = parseFloat(rateing.split("/")[0]);
    const stars = [];


    for (let i = 1; i <= Math.floor(rate); i++) {
        stars.push(<img key={i} src={star} alt="star" className='w-6 h-6' />);
    }


    if (rate % 1 >= 0.5) {
        stars.push(<img key={rate} src={HalfStar} alt="halfstar" className='w-6 h-6' />);
    }

    return (
        <div className='flex flex-col min-w-max px-1'>
            <img src={image} alt="item image" className="w-[80vw] max-w-[295px] h-auto rounded-[20px] object-cover" />
            <h5 className='text-xl font-bold'>{name}</h5>
            <div className='flex justify-start items-center gap-2'>
                {stars}
                <p className='text-gray-500 text-sm'>{rateing}</p>
            </div>

            {/* add discount to the card  */}
            <p className='font-bold text-xl'>{price}</p>
            

        </div >

    )
}

export default Item