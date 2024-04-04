import { NotesStyle } from '../Projects'
import { MdOutlineNoteAlt, MdDeleteForever } from 'react-icons/md'
const Notes = () => {
  return (
    <NotesStyle className='card'>
      <div className='card-header text-right'>
        <MdOutlineNoteAlt />
        <MdDeleteForever />
      </div>
    </NotesStyle>
  )
}

export default Notes
