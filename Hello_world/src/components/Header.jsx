import React from 'react'

export default function Header(props) {
    return (
        <header className='h-40 w-full flex justify-center items-center bg-gray-600'>
            <div className='flex flex-wrap gap-4 '>
                <h1 className='text-4xl text-gray-300 font-bold'>hello👋 <span className='font-semibold text-blue-400 text-3xl'>{props.name}</span> </h1>
            </div>
        </header>
    )
}
