import React from 'react'

// componets
import Item from './Item'

function Arrivals() {
    return (
        <section className='flex flex-col gap-10 mt-12   '>
            <h3 className='text-center font-bold text-5xl'>NEW ARRIVALS</h3>
            <div className='flex flex-row gap-3 w-full justify-center items-center max-w-full overflow-x-auto scrollbar-hide scroll-smooth'>

                <Item
                    image="https://www.houseofblanks.com/cdn/shop/files/HeavyweightTshirt_Yellow_01.jpg?v=1726516946&width=1946"
                    name="T-SHIRT WITH TAPE DETAILS"
                    price="$120"
                    rateing="4.5/5"
                />

                <Item
                    image="https://www.tradeprint.co.uk/dam/jcr:cfdb2af1-7b39-483a-8fce-f665c63b5222/Heavy%20Cotton%20T-Shirt%20Black.webp"
                    name="SLEEVE STRIPED T-SHIRT"
                    price="$130"
                    rateing="3.5/5"
                />

                <Item
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_0tkaL4zA1fw5YTuNUpjdaLpZpeoenETwOg&s"
                    name="SKINNY FIT JEANS"
                    price="$80"
                    rateing="5/5"
                />

                <Item
                    image="https://oktoberfestwear.com/cdn/shop/files/SRT-03.webp?v=1748007790&width=1024"
                    name="CHECKERED SHIRT"
                    price="$180"
                    rateing="4.5/5"
                />


            </div>
            <div className='w-full mt-4 flex  justify-center items-center px-12 py-5 pb-8 border-b-2 border-b-gray-200 border-solid'>
                <button className='px-[60px] py-[12px] font-medium text-center border-solid border-gray-500 border-2 rounded-4xl hover:bg-gray-200 ease-in-out '>
                    View All
                </button>
            </div>

        </section>
    )
}

export default Arrivals