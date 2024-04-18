import { Title } from '../../components'
import ExpensesForm from './ExpensesForm'
import ExpensesList from './ExpensesList'
import { BudgetStyle } from './styles/BudgetStyle'

const ExpenseCalculatorApp = () => {
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
          <ExpensesForm />

          <section className='card mt-2 bg-primary text-light'>
            {/* Display Total */}
            <div className='card-body'>
              <BudgetStyle>
                <h3>Budget (KES): </h3>
                <input type='number' />
              </BudgetStyle>
              <h3 className='mb-1'>Total Expenses (KES): </h3>

              {/* Calculate Savings */}
              <h3>Savings (KES): </h3>
            </div>
          </section>
        </aside>

        <section>
          {/* ExpensesList Component */}
          <ExpensesList />
        </section>
      </section>
    </main>
  )
}

export default ExpenseCalculatorApp
