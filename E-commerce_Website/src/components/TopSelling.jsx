import React from 'react'
// componets
import Item from './Item'


// IMAGES
import shirt from '../assets/CLOTH1.png'
import Tshirt from '../assets/CLOTH2.png'
import shorts from '../assets/CLOTH3.png'
import jeans from '../assets/CLOTH4.png'


function TopSelling() {
    return (
        <section className='flex flex-col gap-10 mt-12 mx-auto px-2  '>
            <h3 className='text-center font-extrabold text-5xl'>TOP SELLING</h3>
            <div className='w-full flex justify-center '>

                <div className=' flex flex-row gap-3 w-fit justify-start items-center overflow-x-auto scrollbar-hide scroll-smooth'>

                    <Item
                        image={shirt}
                        name="VERTICAL STRIPED SHIRT"
                        price="$212"
                        rateing="5.0/5"
                    />

                    <Item
                        image={Tshirt}
                        name="COURAGE GRAPHIC T-SHIRT"
                        price="$130"
                        rateing="4.0/5"
                    />

                    <Item
                        image={shorts}
                        name="LOOSE FIT BERMUDA SHORTS"
                        price="$80"
                        rateing="3.0/5"
                    />

                    <Item
                        image={jeans}
                        name="FADED SKINNY JEANS"
                        price="$180"
                        rateing="4.5/5"
                    />


                </div>
            </div>
            <div className='w-full mt-4 flex  justify-center items-center px-4  '>
                <button className='w-full max-w-2xs md:w-fit lg:w-fitt px-[60px] py-[12px] font-medium text-center border-solid border-gray-500 border-2 rounded-full hover:bg-gray-200 ease-in-out '>
                    View All
                </button>
            </div>

        </section>
    )
}

export default TopSelling