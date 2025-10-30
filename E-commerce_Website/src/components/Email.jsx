import React from 'react'


// images
import email from '../assets/email.png'


function Email() {
    return (
        <section className='w-full  md:px-28 lg:px-36  z-10 relative mb-[-100px] px-7'>
            <div className='  bg-black w-full flex flex-col md:flex-row  lg:flex-row  items-center gap-7 r md:gap-20 lg:gap-24 justify-between p-4 md:p-9 lg:p-12 rounded-[20px] z-50'>
                <div>
                    <h4 className='text-white font-bold text-[40px] leading-[45px]' >STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS</h4>
                </div>

                <form className='flex flex-col gap-4' >
                    <div className=' w-full  md:w-fit lg:w-fit flex items-center  px-4 py-3.5 gap-3 bg-white rounded-[62px]'>
                        <img src={email} alt="email" className='w-6 h-6 ' />
                        <input type="text" name="" id="" placeholder='Enter your email address' className='text-gray-400  border-none focus:border-none border-white' />
                    </div>

                    <button type="submit" className='bg-white  text-black p-4 rounded-[62px] px-7 font-bold '>Subscribe to Newsletter</button>

                </form>

            </div>
        </section>
    )
}

export default Email