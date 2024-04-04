import { useState } from 'react'
import { Button, Notes } from '../../components'
import { v4 as uuidv4 } from 'uuid'

const NotesApp = () => {
  const [notes, setNotes] = useState([])

  const handleNewNote = (note) => {
    const newNotes = [...notes, note]
    newNotes.filter((note) => !note.id && (note.id = uuidv4()))
    setNotes(newNotes)
  }

  return (
    <div className='container'>
      <Button
        classes={'btn-success'}
        text='+ New Note'
        handleClick={handleNewNote}
      />

      <div
        className='container container-sm d-flex gap-24'
        style={{ flexWrap: 'wrap' }}
      >
        {notes.map((note, index) => (
          <Notes key={index} note={note} />
        ))}
      </div>
    </div>
  )
}

export default NotesApp
