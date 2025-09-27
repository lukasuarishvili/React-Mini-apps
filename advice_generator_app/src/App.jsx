import { useState } from 'react'
import icon from './assets/images/icon-dice.svg'
import pattern from './assets/images/pattern-divider-desktop.svg'
import axios from 'axios'

function App() {

  let [advice, setadvice] = useState({
    "id": "001",
    "advice": `კაცი ჯობია ღონესა თუ კაცი მოიგონებსა`
  })

  function getAdvice(event) {


    axios.get(`https://api.adviceslip.com/advice`)
      .then((response) => {
        console.log(response.data)
        setadvice({
          "id": response.data.slip.id,
          "advice": response.data.slip.advice
        })
      })
      .catch((error) => {
        console.log(error);
        setadvice({
          "id": `error`,
          "advice": `Could not get the advice try again later`
        })
      })

  }

  return (

    <div className='flex flex-col items-center justify-center text-center gap-3  bg-card rounded-[7px] px-3.5 pt-7 pb-14  w-80 relative ' >
      <h1 className='text-green text-[13px] font-semibold tracking-[3px] '>ADVICE #{advice.id}</h1>
      <p className='text-[28px] font-extrabold text-text-white py-2'>"{advice.advice}"</p>
      <img src={pattern} alt="pattern" className='w-full ' />
      <button onClick={getAdvice} type="button" className='rounded-full bg-green p-3.5 absolute -bottom-6.5 
      cursor-pointer hover:shadow-[0_0_40px_green] transition-shadow duration-300 ease-in-out'>
        <img src={icon} alt="Main icon" />
      </button>
    </div>
  )
}

export default App

