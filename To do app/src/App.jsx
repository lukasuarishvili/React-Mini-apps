import { useState } from 'react'
import Note from './components/Note'


function App() {
  let [notes, setNotes] = useState([])

  function addNote(event) {

    event.preventDefault();

    let newNote = {
      title: event.target.title.value,
      text: event.target.text.value
    };

    setNotes([newNote ,...notes]);

    event.target.title.value = ""
    event.target.text.value = ""
  };





  return (
    <>

      <header className=' w-full flex flex-col items-center justify-center gap-6 mx-auto p-2.5'>
        <h1 className='text-5xl font-bold mt-3 '>To do app</h1>
        <form className=' bg-teal-700  rounded-2xl flex flex-col justify-center items-center gap-4 p-4' method="post" onSubmit={addNote} >
          <div className=' w-full flex flex-col gap-1.5'>
            <label className="font-semibold text-xl" >title</label>
            <input type="text" name="title" className='border-2 border-amber-200 rounded-[3px] px-1.5 py-1' />
          </div>
          <div className='w-full flex flex-col gap-1.5'>
            <label className="font-semibold text-xl" >text contet</label>
            <input type="text" name="text" className='border-2 border-amber-200 rounded-[3px] w-full h-18 px-1.5 py-1 max-w-full ' />
          </div>


          <button type="submit" className='px-6 py-2 bg-green-900 rounded-[5px]' >submit</button>

        </form>
      </header>

      <main className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  grid-rows-3  gap-4 mx-auto px-2 lg:px-5 mt-5'>
        {
          notes.map((todo) => {
            return <Note title={todo.title} text={todo.text} />

          })
        }
      </main>
    </>
  )
}

export default App
