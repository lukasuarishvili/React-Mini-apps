import React, { useContext } from 'react'

// images
import check from '../assets/images/icon-check.svg'
import cross from '../assets/images/icon-cross.svg'


// context 
import { ToDos } from '../App'


function ToDo({ title, completed, index }) {


    let { theme, toDoItems, setToDoItems } = useContext(ToDos)





    return (
        <div className='w-full flex items-center justify-between p-3 border-b border-gray-800 '>
            <div className='flex gap-3 h-full w-full'>
                <button
                    className='max-w-full rounded-[50%] border-none flex items-center justify-center h-8 w-8'
                    style={!completed ? { backgroundColor: 'purple' } : { backgroundColor: 'purple' }}
                   >

                    {
                        !completed && <img src={check} />
                    }

                </button>

                <div>
                    <h3 className='text-white text-xl font-semibold'
                        style={theme === "light" ? { color: "black" } : { color: "white" }}>{title}</h3>
                </div>

            </div>

            <div className='h-full'>
                <button className='hover:bg-gray-400 p-2'>
                    <img src={cross} />
                </button>
            </div>
        </div>
    )
}

export default ToDo