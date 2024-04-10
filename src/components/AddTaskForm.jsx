import Button from './Button'

const AddTaskForm = ({ date, type, setData, buttonClick }) => {
  return (
    <div
      className='dsf'
      style={{
        justifyContent: 'space-between',
        borderBottom: '2px solid #666',
        marginBottom: '32px',
      }}
    >
      <input
        name='inputDate'
        type='datetime-local'
        value={date}
        onChange={setData}
        className=''
      />
      <input
        name='inputType'
        type='text'
        value={type}
        onChange={setData}
        className=''
        placeholder='Specify the task'
      />
      <Button text='+ Add' handleClick={buttonClick} />
    </div>
  )
}

export default AddTaskForm
