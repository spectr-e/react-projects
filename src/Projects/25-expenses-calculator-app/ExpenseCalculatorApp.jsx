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
      ></section>
    </main>
  )
}

export default ExpenseCalculatorApp
