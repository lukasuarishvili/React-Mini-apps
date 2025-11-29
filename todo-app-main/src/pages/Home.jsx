import React, { useContext } from 'react'

// images
import bgDark from '../assets/images/bg-desktop-dark.jpg'
import bgLight from '../assets/images/bg-desktop-light.jpg'

// components
import Header from '../Components/header'
import ToDoForm from '../Components/ToDoForm'
import ToDo from '../Components/ToDo'

// context 
import { ToDos } from '../App'


function Home() {

    let { theme, toDoItems } = useContext(ToDos)

    return (

        <div
            className='w-full h-screen bg-no-repeat flex items-center justify-center  px-4'
            style={theme === "dark" ? { backgroundImage: `url(${bgDark})`, backgroundColor: " hsl(235, 21%, 11%)" } : { backgroundImage: `url(${bgLight})` }}>

            <div className='w-[600px] flex flex-col gap-12   p-2'>
                <Header />

                <ToDoForm />

                <div className='w-full h-fit flex flex-col gap-2 rounded-xl shadow-2xl '
                    style={theme === "dark" ? { backgroundColor: " hsl(235, 21%, 11%)" } : { backgroundColor: "white" }} >
                    {
                        toDoItems.map((item, index) =>
                            (<ToDo key={index} title={item.title} completed={item.completed} index={index} />)
                        )
                    }
                </div>

                <div className='w-full flex justify-around p-3 '>
                    <div>
                        <p > 5 items left</p>
                    </div>

                    <div className='flex gap-2 '>
                        <button> <p className='hover:text-gray-800'> All</p></button>
                        <button> <p className='hover:text-gray-800'> Active</p></button>
                        <button> <p className='hover:text-gray-800'>  Completed</p></button>
                    </div>

                    <div>
                        <button className='hover:text-gray-800'>clear Completed</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home