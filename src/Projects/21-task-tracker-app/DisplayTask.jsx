import { RiDeleteBin6Fill } from 'react-icons/ri'
import { Button } from '../../components'
import { DisplayTaskStyle } from './TableStyle'

const DisplayTask = ({ type, date, taskClick }) => {
  return (
    <DisplayTaskStyle onClick={taskClick}>
      <div>
        <h3>{type}</h3>
        <small className='text-danger'>{date}</small>
      </div>
    </DisplayTaskStyle>
  )
}

export default DisplayTask
