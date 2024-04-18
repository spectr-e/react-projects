import { MdAddCircle, MdEdit } from 'react-icons/md'
import { Button, Form } from '../../components'

const ExpensesForm = ({ onChange, onSubmit, date, item, edit, amount }) => {
  return (
    <form onSubmit={onSubmit} className='bg-primary text-light card'>
      <div className='card-body'>
        <Form
          inputName={'date'}
          labelText={'Date'}
          inputType='date'
          values={date}
          onChange={onChange}
        />
        <Form
          inputName={'item'}
          labelText={'Expense'}
          inputType='text'
          values={item}
          onChange={onChange}
          placeholderText={'e.g., rent'}
        />
        <Form
          inputName={'amount'}
          labelText={'Amount'}
          inputType='number'
          values={amount}
          onChange={onChange}
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
            btnType={'submit'}
          />
        )}
      </div>
    </form>
  )
}

export default ExpensesForm
