import React from 'react'

function Item(item) {

    const { name, image, price, rateing, disscount }=item
    return (

        <div className='flex flex-col min-w-max px-1'>
            <img src={image} alt="item image" className='w-[295px] h-[298px] rounded-xl ' />
            <h5 className='text-xl font-bold'>{name}</h5>
            <p className='text-gray-500 text-sm'>{rateing}</p>
            {/* <p>disscount</p> if discount is given then its shown */}
            <p className='font-bold text-xl'>{price}</p>
        </div >

    )
}

export default Item