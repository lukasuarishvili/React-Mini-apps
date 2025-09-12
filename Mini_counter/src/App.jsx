import { useState } from 'react'
import './Main.css'

function App() {
  const [count, setcount] = useState(0)

  function increment() {
    setcount(count + 1)
  }
  function decrement() {
    setcount(count - 1)
  }
  function double() {
    setcount(count *2)
  }
  return (
    <>
      <div>
        <h1>count: {count}</h1>
        <button onClick={increment}>increment </button>
        <button onClick={decrement}>decrement </button>
        <button onClick={double}>double </button>
      </div>
    </>
  )
}

export default App
