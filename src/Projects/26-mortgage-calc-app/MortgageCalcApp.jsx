import { useEffect, useState, useRef } from 'react'
import { Button, Form, Title } from '../../components'

const MortgageCalcApp = () => {
  const homeInputRef = useRef(null)
  useEffect(() => {
    homeInputRef.current.focus()
  }, [])

  // Form controls
  const [formData, setFormData] = useState({
    homeVal: '',
    downPayment: '',
    interestRate: '',
    loanDuration: '',
  })
  const [monthlyPay, setMonthlyPay] = useState('')
  const [loanAmt, setLoanAmt] = useState('')
  const alertType = monthlyPay ? 'alert-success' : 'alert-danger'

  // Event handlers
  // On Change
  const handleChange = (e) => {
    switch (e.target.name) {
      case 'homeVal':
        setFormData({ ...formData, homeVal: e.target.value })
        break
      case 'downPayment':
        setFormData({ ...formData, downPayment: e.target.value })
        break
      case 'interestRate':
        setFormData({ ...formData, interestRate: e.target.value })
        break
      case 'loanDuration':
        setFormData({ ...formData, loanDuration: e.target.value })
        break
      default:
        break
    }
  }

  // Calculations
  // 1. Calc the loan amount
  const calcLoanAmt = () => {
    setLoanAmt(formData.homeVal - formData.downPayment)
    return loanAmt
  }

  // 2. Calc the monthly payment
  const calcMonthlyPay = () => {
    // Interest Rate Converter
    const percentToDec = (percent) => {
      return percent / 12 / 100
    }

    // Year Converter
    const yearToMonth = (year) => {
      return year * 12
    }

    const interest = percentToDec(formData.interestRate)
    const months = yearToMonth(formData.loanDuration)
    const payment = (
      (interest * loanAmt) /
      (1 - Math.pow(1 + interest, -months))
    ).toFixed(2)

    setMonthlyPay(payment)
    return monthlyPay
  }

  return (
    <div className='container card mt-4' style={{ width: 500 }}>
      <Title title={'Mortgage Calculator'} classes={'title text-center'} />

      <form onSubmit={(e) => e.preventDefault()} className='p-2'>
        <div
          className='d-grid'
          style={{
            gridTemplateColumns: '1fr 1fr',
            gap: '12',
          }}
        >
          <Form
            inputName={'homeVal'}
            inputType='number'
            labelText={'Home Value'}
            placeholderText={'Enter the value of the home'}
            refer={homeInputRef}
            values={formData.homeVal}
            onChange={handleChange}
            onKeyUp={calcLoanAmt}
          />
          <Form
            inputName={'downPayment'}
            inputType='number'
            labelText={'Down Payment'}
            placeholderText={'Enter your deposit amount'}
            values={formData.downPayment}
            onChange={handleChange}
            onKeyUp={calcLoanAmt}
          />
          <Form
            inputName={'interestRate'}
            inputType='number'
            labelText={'Interest Rate (%)'}
            placeholderText={'Enter the interest rate'}
            values={formData.interestRate}
            onChange={handleChange}
          />
          <Form
            inputName={'loanDuration'}
            inputType='number'
            labelText={'Loan Duration (Yrs)'}
            placeholderText={'Enter the loan duration'}
            values={formData.loanDuration}
            onChange={handleChange}
          />
          <Form
            inputType='number'
            labelText={'Loan Amount'}
            placeholderText={'The calculated loan amount'}
            values={loanAmt}
            readOnly={true}
          />
        </div>
        <Button
          btnType={'submit'}
          text='Calculate'
          classes={'btn-primary btn-block'}
          handleClick={calcMonthlyPay}
        />

        {/* Calculate Alert  */}
        {monthlyPay ? (
          <h4
            className={`${alertType}`}
            style={{
              width: 'auto',
              margin: '16px 0',
            }}
          >
            Pay KES {monthlyPay} per month
          </h4>
        ) : (
          <h4
            className={`${alertType}`}
            style={{
              width: 'auto',
              margin: '16px 0',
            }}
          >
            Complete all the fields
          </h4>
        )}
      </form>
    </div>
  )
}

export default MortgageCalcApp
