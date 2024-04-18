import { MdAddCircle, MdEdit } from 'react-icons/md'
import { Button, Form } from '../../components'

const ExpensesForm = ({
  handleSubmit,
  date,
  handleDate,
  charge,
  edit,
  amount,
  handleAmount,
  handleCharge,
}) => {
  return (
    <form onSubmit={handleSubmit} className='bg-primary text-light card'>
      <div className='card-body'>
        <Form
          labelText={'Date'}
          inputType='date'
          values={date}
          onChange={handleDate}
        />
        <Form
          labelText={'Expense'}
          inputType='text'
          values={charge}
          onChange={handleCharge}
          placeholderText={'e.g., rent'}
        />
        <Form
          labelText={'Amount'}
          inputType='number'
          values={amount}
          onChange={handleAmount}
          placeholderText={'e.g., 1,500'}
        />
        {edit ? (
          <Button
            classes={'btn-block'}
            icon={<MdEdit className='btn-icon' />}
            text='Edit'
          />
        ) : (
          <Button
            classes={'btn-block btn-warning'}
            icon={<MdAddCircle className='btn-icon' />}
            text={'Add'}
          />
        )}
      </div>
    </form>
  )
}

export default ExpensesForm
