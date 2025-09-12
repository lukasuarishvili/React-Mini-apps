import { useState } from 'react'
import note from './components/note'

function App() {

  let notes = [
    {
      title: "this is test title",
      text: "this is text test "
    }
  ]


  function addNote(event) {
    event.preventDefault()
    todoslist.push({
      name: event.target.title.value,
      text: event.target.text.value
    })
  };


  function renderNotes(title, text) {
    return <note title={title} text="text" />
  };

  notes.map((todo) => {
    renderNotes(todo.title, todo.text)
  });

  return (
    <>

      <header className='h-80 w-full items-center justify-center gap-4'>
        <h1>To do app</h1>
        <form action="" method="post" onSubmit={addNote}>

          <input type="text" name="title" />
          <input type="text" name="text" />
          <button type="submit" >submit</button>
        </form>
      </header>

      <main className='grid'>

      </main>
    </>
  )
}

export default App
