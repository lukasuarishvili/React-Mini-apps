import React from 'react'

function Note({ title, text }) {
    return (
        <div className='w-full min-h-64 flex flex-col justify-start items-start rounded-2xl px-2.5 py-4 gap-5 bg-blue-950'>
            <h3 className='text-2xl text-white font-semibold '>Title: {title}</h3>
            <p className='text-[20px] text-white font'>Text: {text}</p>
        </div>
    )
}

export default Note