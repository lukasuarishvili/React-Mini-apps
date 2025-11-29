import React, { useState } from 'react'
import { useContext } from 'react'

// images
import check from '../assets/images/icon-check.svg'
import cross from '../assets/images/icon-cross.svg'

// context 
import { ToDos } from '../App'

function ToDoForm() {
    let { toDoItems, setToDoItems, theme } = useContext(ToDos);

    let [item, setItem] = useState({
        "title": "",
        "completed": true
    })


    function handlecompletition() {
        if (!item.completed) {
            setItem((prev) => ({
                ...prev,
                completed: true
            }))
        } else {
            setItem((prev) => ({
                ...prev,
                completed: false
            }))
        }

    }


    function handleChange(e) {
        setItem(prev => ({
            ...prev,
            title: e.target.value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (item.title.trim() === "") return;


        setToDoItems([...toDoItems, item])

        setItem({
            "title": "",
            "completed": false
        })
    }


    return (
        <div className='min-w-full flex flex-row justify-between items-center p-3  rounded-lg shadow-lg '
            style={theme === "light" ? { backgroundColor: "white" } : { backgroundColor: " hsl(235, 21%, 11%)" }}>
            <form className='w-full  ' onSubmit={handleSubmit}>
                <div className='flex items-start gap-2'>

                    <button className='max-w-full rounded-[50%] border-none bg-purple-500 flex items-center justify-center w-9 h-8 '
                        style={item.completed ? { backgroundColor: "purple" } : { backgroundColor: "purple" }}
                        onClick={handlecompletition}
                    >

                        {
                            item.completed && <img src={check} />
                        }
                    </button>

                    <input
                        style={theme === "light" ? { color: "black" } : { color: "white" }}
                        className='w-full py-1 px-2 border-none active:border-none border-transparent active:border-0 text-gray-300 '
                        placeholder='Create a new todo'
                        type="text"
                        value={item.title}
                        onChange={handleChange}

                    />
                </div>
            </form>
        </div>
    )
}

export default ToDoForm