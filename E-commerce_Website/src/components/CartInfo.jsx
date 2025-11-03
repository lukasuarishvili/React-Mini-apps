import React from 'react'


// images
import tshirt from '../assets/tshirt.png'
import trash from '../assets/trash.png'
import plus from '../assets/plus.png'
import minus from '../assets/minus.png'


function CartInfo() {
    return (
        <section className='w-full mx-auto px-20 py-2 flex flex-col gap-3 '>
            <h5 className=' pt-4 border-t-2 border-gray-400'>{"Home > Cart"}</h5>

            <h4 className='text-[40px] font-extrabold '>Your cart</h4>
            <div className='w-full flex flex-row gap-5' >


                <div className='flex flex-col gap-2 '>

                    <div className='flex flex-row gap-8 border-2 border-gray-400 rounded-2xl p-3'>
                        <div className='flex flex-row gap-3'>
                            <div className='w-[124px] h-[124px]'>
                                <img src={tshirt} alt="tshirt" className='w-full h-full' />
                            </div>
                            <div className='flex flex-col'>
                                <h6 className='text-[20px] font-bold'>Gradient Graphic T-shirt</h6>
                                <p className='text-black text-[14px]'>Size:<em className='text-gray-500'>Large</em></p>
                                <p className='text-black text-[14px]'>Color:<em className='text-gray-500' >White</em></p>
                                <h5 className='text-[24px] font-bold'>$145</h5>
                            </div>

                        </div>
                        <div className='max-w-full flex flex-col justify-between '>
                            <div className='w-6 h-6'>
                                <img src={trash} alt="trash" className='w-full h-full' />
                            </div>

                            <div className='flex gap-5 items-center rounded-3xl bg-gray-200 px-3.5 py-2.5'>
                                <button className='w-5 h-5'>
                                    <img src={plus} alt="plus" className='w-full h-full' />
                                </button>
                                <h4>1</h4>

                                <button className='w-5 h-5'>
                                    <img src={minus} alt="minus" className='w-full h-full' />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-row gap-8 border-2 border-gray-400 rounded-2xl p-3'>
                        <div className='flex flex-row gap-3'>
                            <div className='w-[124px] h-[124px]'>
                                <img src={tshirt} alt="tshirt" className='w-full h-full' />
                            </div>
                            <div className='flex flex-col'>
                                <h6 className='text-[20px] font-bold'>Gradient Graphic T-shirt</h6>
                                <p className='text-black text-[14px]'>Size:<em className='text-gray-500'>Large</em></p>
                                <p className='text-black text-[14px]'>Color:<em className='text-gray-500' >White</em></p>
                                <h5 className='text-[24px] font-bold'>$145</h5>
                            </div>

                        </div>
                        <div className='max-w-full flex flex-col justify-between '>
                            <div className='w-6 h-6'>
                                <img src={trash} alt="trash" className='w-full h-full' />
                            </div>

                            <div className='flex gap-5 items-center rounded-3xl bg-gray-200 px-3.5 py-2.5'>
                                <button className='w-5 h-5'>
                                    <img src={plus} alt="plus" className='w-full h-full' />
                                </button>
                                <h4>1</h4>

                                <button className='w-5 h-5'>
                                    <img src={minus} alt="minus" className='w-full h-full' />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-row gap-8 border-2 border-gray-400 rounded-2xl p-3'>
                        <div className='flex flex-row gap-3'>
                            <div className='w-[124px] h-[124px]'>
                                <img src={tshirt} alt="tshirt" className='w-full h-full' />
                            </div>
                            <div className='flex flex-col'>
                                <h6 className='text-[20px] font-bold'>Gradient Graphic T-shirt</h6>
                                <p className='text-black text-[14px]'>Size:<em className='text-gray-500'>Large</em></p>
                                <p className='text-black text-[14px]'>Color:<em className='text-gray-500' >White</em></p>
                                <h5 className='text-[24px] font-bold'>$145</h5>
                            </div>

                        </div>
                        <div className='max-w-full flex flex-col justify-between '>
                            <div className='w-6 h-6'>
                                <img src={trash} alt="trash" className='w-full h-full' />
                            </div>

                            <div className='flex gap-5 items-center rounded-3xl bg-gray-200 px-3.5 py-2.5'>
                                <button className='w-5 h-5'>
                                    <img src={plus} alt="plus" className='w-full h-full' />
                                </button>
                                <h4>1</h4>

                                <button className='w-5 h-5'>
                                    <img src={minus} alt="minus" className='w-full h-full' />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                <div>

                </div>
            </div>
        </section>
    )
}

export default CartInfo