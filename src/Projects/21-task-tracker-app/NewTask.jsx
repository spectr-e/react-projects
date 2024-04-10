import { NewTaskStyle } from './TableStyle'

const NewTask = ({ type, date }) => {
  return (
    <NewTaskStyle>
      <div className=''>
        <h3 className=''>{type}</h3>
        <small className='text-danger'>{date}</small>
      </div>
    </NewTaskStyle>
  )
}

export default NewTask
