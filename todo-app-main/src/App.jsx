import { createContext, useState } from 'react'
import Home from './pages/Home';


export let ToDos = createContext([]);

function App() {

  let [toDoItems, setToDoItems] = useState([]);
  let [theme, settheme] = useState("dark");


  return (
    <>
      {
        <ToDos.Provider value={{ toDoItems, setToDoItems, theme, settheme }}>
          <Home />
        </ToDos.Provider>
      }

    </>
  )
}

export default App
