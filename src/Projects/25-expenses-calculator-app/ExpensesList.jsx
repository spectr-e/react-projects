import { Button } from '../../components'

const ExpensesList = ({ clearItems, expenses = [] }) => {
  return (
    <>
      <ul className='list'>{/* ExpenseItem */}</ul>
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
