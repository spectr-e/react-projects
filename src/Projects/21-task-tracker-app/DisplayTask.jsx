import { RiDeleteBin6Fill } from 'react-icons/ri'
import { Button } from '../../components'
import { DisplayTaskStyle } from './TableStyle'

const DisplayTask = ({ type, date, deleteNote, taskClick }) => {
  return (
    <DisplayTaskStyle onClick={taskClick}>
      <div>
        <h3>{type}</h3>
        <small className='text-danger'>{date}</small>
      </div>
      <Button
        text={
          <RiDeleteBin6Fill
            className='text-danger font-lg'
            style={{ userSelect: 'none', pointerEvents: 'none' }}
          />
        }
        handleClick={deleteNote}
        classes={'btn-light btn-sm'}
      />
    </DisplayTaskStyle>
  )
}

export default DisplayTask
