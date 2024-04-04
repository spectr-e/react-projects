import { DeleteIcon, Icons, NotesStyle } from '../Projects'
import { MdOutlineNoteAlt, MdDeleteForever } from 'react-icons/md'
const Notes = () => {
  return (
    <NotesStyle className='card'>
      <div className='card-header text-right'>
        <Icons>
          <MdOutlineNoteAlt />
          <DeleteIcon>
            <MdDeleteForever />
          </DeleteIcon>
        </Icons>
      </div>
    </NotesStyle>
  )
}

export default Notes
