import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'



// componets
import Item from './Item'



function Arrivals() {
    let [products, setproducts] = useState([]);
    let [cardInfos, setCardInfos] = useState([])

    // thsi gets the data and stores it in products state
    useEffect(() => {

        const getData = async () => {
            let res = await fetch("/data.json");
            let data = await res.json()
            setproducts(data)
        };

        getData();
    }, []);


    // when products state changes it should add right info cards to the cards
    useEffect(() => {

        let info = addCardInfo()

        setCardInfos(info)
    }, [products])



    //  ❗❗❗❗❗❗❗❗need randomnes 

    function randomNums() {
        let nums = []
        while (nums.length < 4) {
            nums.push(Math.floor(Math.random() * products.length))
            // test=[10,3,1,4]
        }
        return nums
    };


    function addCardInfo() {
        let cardIndexses = randomNums()

        let cardinfos = [];

        
        for (let i = 0; i < 4; i++) {
            cardinfos.push(products[cardIndexses[i]])
        }
        console.log(cardinfos)
        return cardinfos
    }





    return (
        <section className='flex flex-col gap-10 mt-12 mx-auto px-2  '>
            <h3 className='text-center font-extrabold text-5xl'>NEW ARRIVALS</h3>
            <div className='w-full flex justify-center '>

                <ul className=' flex flex-row gap-3 w-fit justify-start items-center overflow-x-auto  scroll-smooth'>

                    {
                        cardInfos.map((cardinfo, index) => <Item key={index} item={cardinfo} />)
                    }

                </ul>
            </div>
            <div className='w-full mt-4 flex  justify-center items-center px-4  '>
                <button className='w-full max-w-2xs md:w-fit lg:w-fitt px-[60px] py-[12px] font-medium text-center border-solid border-gray-500 border-2 rounded-full hover:bg-gray-200 ease-in-out '>
                    View All
                </button>

            </div>

        </section>
    )
}

export default Arrivals
