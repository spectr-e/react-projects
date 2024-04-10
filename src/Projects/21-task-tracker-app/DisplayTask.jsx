import { DisplayTaskStyle } from './TableStyle'

const DisplayTask = ({ type, date }) => {
  return (
    <DisplayTaskStyle>
      <div className=''>
        <h3 className=''>{type}</h3>
        <small className='text-danger'>{date}</small>
      </div>
    </DisplayTaskStyle>
  )
}

export default DisplayTask
