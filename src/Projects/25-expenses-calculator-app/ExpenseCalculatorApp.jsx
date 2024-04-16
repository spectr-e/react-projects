import { Title } from '../../components'

const ExpenseCalculatorApp = () => {
  return (
    <main className='container'>
      <Title title={'Expense Calculator'} />
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
          <section className='card mt-2 bg-primary text-light'>
            <div className='card-body'>
              {/* <BudgetStyle>
                <h3>Budget: KES</h3>
                <input type='number' value={''} />
              </BudgetStyle> */}
              <h3 className='mb-1'>Total Expenses: KES</h3>
              {/* Calculate Savings */}
              <h3>Savings: KES</h3>
            </div>
          </section>
        </aside>
      </section>
    </main>
  )
}

export default ExpenseCalculatorApp
