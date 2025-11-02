import React from 'react'

import dots from '../assets/dots.png'

function Review(Review_info) {



    return (
        <div className='flex flex-col gap-1 border-2 border-gray-200 rounded-[20px] p-3 '>
            <div className='flex justify-between w-full'>
                <h3>⭐⭐⭐⭐</h3>
                <img src={dots} alt="dots" className='w-6 h-6' />

            </div>
            <h3 className='font-bold text-[20px]'>Samantha D. ✅</h3>
            <p className='w-full text-gray-600'>"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>

            <h4 className='font-semibold text-gray-800'>Posted on August 14, 2023</h4>
        </div>
    )
}

export default Review