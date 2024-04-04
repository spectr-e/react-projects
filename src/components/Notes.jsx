import { useEffect, useState } from 'react'
import { DeleteIcon, Icons, NotesStyle } from '../Projects'
import { MdOutlineNoteAlt, MdDeleteForever } from 'react-icons/md'

const Notes = ({ note, onClick, text, bg }) => {
  const [cardBg, setCardBg] = useState('')

  useEffect(() => {
    !cardBg && setCardBg(bg)
  }, [cardBg])

  return (
    <NotesStyle className={`card ${cardBg}`}>
      <div className='card-header text-right'>
        <Icons>
          <MdOutlineNoteAlt />
          <DeleteIcon>
            <MdDeleteForever onClick={() => onClick(note.id)} />
          </DeleteIcon>
        </Icons>
      </div>
      <div className='card-body'>
        <textarea style={{ border: 'none', outline: 'none' }}>{text}</textarea>
      </div>
    </NotesStyle>
  )
}

export default Notes
