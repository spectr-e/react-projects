import { Button } from '../../components'
import ExpenseItem from './ExpenseItem'

const ExpensesList = ({ clearItems, handleEdit, handleDelete, expenses }) => {
  return (
    <>
      <ul className='list'>
        {expenses.map((exp, key) => {
          return (
            <ExpenseItem
              expense={exp}
              key={key}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          )
        })}
      </ul>
      {expenses.length > 0 && (
        <Button
          text={`Clear all`}
          classes={'btn-danger'}
          handleClick={clearItems}
        />
      )}
    </>
  )
}

export default ExpensesList
