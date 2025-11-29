import React, { useContext } from 'react'

// images
import moon from '../assets/images/icon-moon.svg'
import sun from '../assets/images/icon-sun.svg'

// context 
import { ToDos } from '../App'


function Header() {

    let { theme, settheme } = useContext(ToDos)

    function changeTheme() {
        if (theme === "dark") {
            settheme("light")
        } else if (theme === "light") {
            settheme("dark")
        }
        console.log(theme)
    }

    return (
        <div className='w-full  flex justify-between items-center'>
            <div>
                <h1 className='text-white font-bold text-5xl tracking-widest '> To Do</h1>
            </div>

            <div className='h-full flex items-center'>
                {
                    theme === "light" ?
                        <button className='w-8 h-8' onClick={changeTheme}>
                            <img src={moon} alt="button img" className='w-full ' />
                        </button> 
                        :
                        <button className='w-8 h-8' onClick={changeTheme}>
                            <img src={sun} alt="button img" className='w-full ' />
                        </button> 
                }

            </div>
        </div>
    )
}

export default Header