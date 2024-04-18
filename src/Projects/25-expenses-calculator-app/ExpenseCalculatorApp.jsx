import { useEffect, useRef, useState } from 'react'
import { Title } from '../../components'
import ExpensesForm from './ExpensesForm'
import ExpensesList from './ExpensesList'
import { BudgetStyle } from './styles/BudgetStyle'

const ExpenseCalculatorApp = () => {
  const [expenses, setExpenses] = useState('')
  const [date, setDate] = useState('')
  const [amount, setAmount] = useState('')
  const [charge, setCharge] = useState('')
  const [budget, setBudget] = useState('')

  const inputBudget = useRef(null)
  useEffect(() => {
    inputBudget.current.focus()
  }, [])

  return (
    <main className='container'>
      <Title title={'Expense Calculator'} classes={'text-center title'} />

      {/* TODO: Alert Component */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 24,
          margin: 16,
        }}
      >
        <aside>
          {/* ExpensesForm Component */}
          <ExpensesForm date={date} charge={charge} amount={amount} />

          <section className='card text-right mt-2 bg-primary text-light'>
            {/* Display Total */}
            <div className='card-body'>
              <BudgetStyle>
                <h3>Budget (KES) </h3>
                <input
                  ref={inputBudget}
                  type='number'
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                />
              </BudgetStyle>
              <h3 className='mb-1'>Total Expenses (KES): </h3>

              {/* Calculate Savings */}
              <h3>Savings (KES): </h3>
            </div>
          </section>
        </aside>

        <section>
          {/* ExpensesList Component */}
          <ExpensesList expenses={expenses} />
        </section>
      </section>
    </main>
  )
}

export default ExpenseCalculatorApp
