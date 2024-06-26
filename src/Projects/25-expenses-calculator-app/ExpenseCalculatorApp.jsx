import { useEffect, useRef, useState } from 'react'
import { Title } from '../../components'
import ExpensesForm from './ExpensesForm'
import ExpensesList from './ExpensesList'
import { BudgetStyle } from './styles/BudgetStyle'
import { v4 as uuidV4 } from 'uuid'
import Alerts from './Alerts'

// Local Storage
const initalExpenses = localStorage.getItem('expenses')
  ? JSON.parse(localStorage.getItem('expenses'))
  : []

const calcExpenses = (expenses) => {
  return expenses.reduce((total, expense) => {
    return (total += parseInt(expense.amount, 10))
  }, 0)
}

const calcSavings = (budget, expenses) => {
  return budget - calcExpenses(expenses)
}

const ExpenseCalculatorApp = () => {
  const [expenses, setExpenses] = useState(initalExpenses)
  const [formData, setFormData] = useState({
    date: '',
    amount: '',
    item: '',
  })
  const [budget, setBudget] = useState('')
  const [id, setId] = useState(0)
  const [edit, setEdit] = useState(false)
  const [alert, setAlert] = useState({
    show: false,
  })

  // App initialization
  const inputBudget = useRef(null)
  useEffect(() => {
    !inputBudget.current.value && inputBudget.current.focus()
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])

  // Event handlers
  // On Change
  const handleChange = (e) => {
    switch (e.target.name) {
      case 'budget':
        setBudget(e.target.value)
        break
      case 'date':
        setFormData({ ...formData, date: e.target.value })
        break
      case 'item':
        setFormData({ ...formData, item: e.target.value })
        break
      case 'amount':
        setFormData({ ...formData, amount: e.target.value })
        break
      default:
        break
    }
  }

  // On Edit
  const handleEdit = (id) => {
    setEdit(true)
    let editedExpense = expenses.find((expense) => expense.id === id)
    let { date, item, amount } = editedExpense
    setFormData({
      date: date,
      item: item,
      amount: amount,
    })
    setId(id)
  }

  // On Delete
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this expense?')) {
      let filteredExpenses = expenses.filter((expense) => expense.id !== id)
      setExpenses(filteredExpenses)

      //  Delete Alert
      handleAlert({
        type: 'warning',
        text: 'You have successfully deleted this expense',
      })
    }
  }

  // On Clear
  const handleClear = () => {
    if (window.confirm('Are you sure you want to delete all expenses?')) {
      setExpenses([])
    }

    // Clear Alert
    handleAlert({
      type: 'success',
      text: 'You have successfully deleted all expenses',
    })
  }

  // On Alert
  const handleAlert = ({ type, text }) => {
    setAlert({
      show: true,
      type,
      text,
    })
    setTimeout(() => {
      setAlert({ show: false })
    }, 3000)
  }

  // On submit
  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.date && formData.item && formData.amount > 0) {
      // Edit Existing Expense
      if (edit) {
        let tempExp = expenses.map((exp) => {
          return exp.id === id
            ? {
                ...exp,
                date: formData.date,
                item: formData.item,
                amount: formData.amount,
              }
            : exp
        })
        setExpenses(tempExp)
        setEdit(false)
        // Clear the form
        setFormData({
          date: '',
          amount: '',
          item: '',
        })
        // Edit Alert
        handleAlert({
          type: 'success',
          text: 'You have successfully edited the expense ',
        })
      } else {
        const singlExp = {
          id: uuidV4(),
          date: formData.date,
          item: formData.item,
          amount: formData.amount,
        }
        setExpenses([...expenses, singlExp])
        // Clear the form
        setFormData({
          date: '',
          amount: '',
          item: '',
        })
        // Add Alert
        handleAlert({
          type: 'success',
          text: 'You have successfully added an expense ',
        })
      }
    } else {
      // Validation Alert
      handleAlert({
        type: 'danger',
        text: 'Please enter the missing form values',
      })
    }
  }

  return (
    <main className='container'>
      <Title title={'Expense Calculator'} classes={'text-center title'} />
      {/* Alert Component */}
      {alert.show && <Alerts type={alert.type} text={alert.text} />}
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
          <ExpensesForm
            edit={edit}
            date={formData.date}
            item={formData.item}
            amount={formData.amount}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />

          {/* Display Totals Card*/}
          <section className='card text-right mt-2 bg-primary text-light'>
            <div className='card-body'>
              {/* Display Budget*/}
              <BudgetStyle>
                <h3>Budget (KES)</h3>
                <input
                  name='budget'
                  ref={inputBudget}
                  type='number'
                  value={budget}
                  onChange={handleChange}
                />
              </BudgetStyle>

              {/* Display Total Expenses */}
              <h3 className='mb-1'>
                Total Expenses : <br />
                KES {calcExpenses(expenses)}
              </h3>

              {/* Display Total Savings */}
              <h3>
                Savings : <br />
                KES {calcSavings(budget, expenses)}
              </h3>
            </div>
          </section>
        </aside>

        <section>
          {/* ExpensesList Component */}
          <ExpensesList
            expenses={expenses}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            clearExpenses={handleClear}
          />
        </section>
      </section>
    </main>
  )
}

export default ExpenseCalculatorApp
