import { useState } from 'react'


function App() {

  let [mode, setmode] = useState({
    State: "Easy"
  })

  let [number, setNumber] = useState(Math.floor(Math.random() * 11))

  let [mesage, setmesage] = useState("");


  function changMode(mode) {
    setmode({ State: mode })

    switch (mode) {
      case "Easy":
        setNumber(Math.floor(Math.random() * 11))
        break

      case "Mid":
        setNumber(Math.floor(Math.random() * 51))
        break

      case "Hard":
        setNumber(Math.floor(Math.random() * 101))
        break

    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    setmesage("")
    let guess = event.target.user_number.value;

    if (guess == number) {
      setmesage("Corect ✅ try again")
      changMode(mode.State)
    } else if (guess > number) {
      setmesage("Less")
    } else {
      setmesage("More")
    }
    
  }

  return (

    <>
      <div className='fixed  bottom-4 left-4 text-xl font-bold text-gray-800 '>
        <h4>Mode: {mode.State}</h4>
        <h4 className=' text-gray-900'> {number}</h4>
      </div>

      <div className=' flex flex-col gap-5'>
        <h3 className='text-center text-4xl text-gray-500 font-bold'>pick the mode:</h3>
        <div className='flex flex-row gap-3 items-center justify-center'>
          <button className='flex items-center justify-center px-3 py-1.5 rounded-sm bg-green-500 hover:bg-green-600 text-xl font-semibold '
            onClick={() => { changMode("Easy") }} >Easy</button>
          <button className='flex items-center justify-center px-3 py-1.5 rounded-sm bg-yellow-500 hover:bg-yellow-600 text-xl font-semibold '
            onClick={() => { changMode("Mid") }}>Mid</button>
          <button className='flex items-center justify-center px-3 py-1.5 rounded-sm bg-red-500 hover:bg-red-600 text-xl font-semibold '
            onClick={() => { changMode("Hard") }}>Hard</button>

        </div>

        <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
          <input
            type="number"
            name='user_number'
            className='w-full px-3 p-1.5 bg-gray-600 rounded-sm outline-0 text-xl font-semibold' />
          <div className='w-full flex justify-center items-center mt-1'>
            <button
              type="submit"
              className=' px-3 p-1.5 bg-teal-800 hover:bg-teal-600 rounded-sm text-xl font-semibold'
            >guess</button>
          </div>
        </form>

        <div className='  rounded-sm flex justify-center items-center mt-1'>
          <h1 className='text-gray-300 font-semibold text-xl '>{mesage}</h1>

        </div>

      </div >
    </>
  )
}


export default App

// 4) შექმენით NumberGuesser კომპონენტი.
// რა არის NumberGuesser ალბათ იცით.
// პროგრამა ჩაიფიქრებს რიცხვს რაღაც შუალედში, ხოლო მომხმარებელი ცდილობს გამოიცნოს
// პროგრამა ეხმარება მომხმარებელს:
// -> ეუბნება მისი შემოყვანილი რიცხვი მეტია თუ ნაკლებია ჩაფიქრებულზე.
// როცა მომხმარებელი გამოიცნობს რიცხვს გამოაჩინეთ 1 დავალების შესაბამისი Toast 
// დაამატეთ ხელახლა დაწყების ღილაკი
// ---> ეს დავალება მინი პროექტად შეგიძლიათ აქციოთ, დაიხმარეთ ფანტაზია - დაამატეთ როგორც ფუნქციონალი ისე შეალამაზეთ იგი ვიზუალურად.