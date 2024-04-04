import { DeleteIcon, Icons, NotesStyle } from '../Projects'
import { MdOutlineNoteAlt, MdDeleteForever } from 'react-icons/md'
const Notes = ({ note, onClick, text }) => {
  return (
    <NotesStyle className='card'>
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
