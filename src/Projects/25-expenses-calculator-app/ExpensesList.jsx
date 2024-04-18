import { Button } from '../../components'
import ExpenseItem from './ExpenseItem'

const ExpensesList = ({ clearItems, expenses = [] }) => {
  return (
    <>
      <ul className='list'>
        {/* ExpenseItem */}
        <ExpenseItem />
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
