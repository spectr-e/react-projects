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

  const handleDelNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id))
  }

  const cards = [
    'card-info',
    'card-danger',
    'card-success',
    'card-warning',
    'card-primary',
  ]

  const randomBg = () => {
    const random = Math.floor(Math.random() * cards.length)
    return cards[random]
  }
  return (
    <div className='container'>
      <Button
        classes={'btn-success'}
        text='+ New Note'
        handleClick={handleNewNote}
      />

      <div
        className='container container-sm d-flex'
        style={{ flexWrap: 'wrap', gap: 24 }}
      >
        {notes.map((note, index) => (
          <Notes
            key={index}
            note={note}
            onClick={handleDelNote}
            bg={randomBg}
          />
        ))}
      </div>
    </div>
  )
}

export default NotesApp
