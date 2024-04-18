import { MdDelete, MdEdit } from 'react-icons/md'
import { Button } from '../../components'
import { ExpenseItemStyle } from './styles/ExpenseItemStyle'

const ExpenseItem = ({ expense, handleEdit, handleDelete }) => {
  // Destructure from expense object
  const { item, date, amount, id } = expense

  return (
    <ExpenseItemStyle className='expense-details'>
      <div className='d-flex flex-column' style={{ alignItems: 'flex-start' }}>
        <h4 className='text-primary'>{item}</h4>
        <small className='text-danger'>{date}</small>
      </div>
      <div className='text-success'>${amount}</div>
      <div className='d-flex flex-column'>
        <Button
          classes={'btn-sm'}
          handleClick={() => handleEdit(id)}
          text={<MdEdit />}
        />
        <Button
          classes={'btn-sm btn-danger'}
          handleClick={() => handleDelete(id)}
          text={<MdDelete />}
        />
      </div>
    </ExpenseItemStyle>
  )
}

export default ExpenseItem
