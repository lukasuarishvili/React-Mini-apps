import React from 'react'

export default function Footer({ authorName, authorSurame }) {
    return (
        <footer className='h-40 w-full flex flex-col flex-wrap gap-5 justify-center items-center bg-gray-800'>
            <div className='flex  gap-4 '>
                <h4 className='flex gap-2 items-end justify-center text-2xl text-gray-300 font-bold'>made by 
                    <span className='font-semibold text-blue-400 text-3xl'>{authorName}</span>
                    <span className='font-semibold text-blue-400 text-3xl'>{authorSurame}</span>
                </h4>
            </div>
            <div>
                <p className='text-gray-700'> &copy; 2025 by me. All rights reserved.</p>
            </div>
        </footer>
    )
}
