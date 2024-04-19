import { useEffect, useState, useRef } from 'react'
import { Button, Form, Title } from '../../components'

const MortgageCalcApp = () => {
  const homeInputRef = useRef(null)
  useEffect(() => {
    homeInputRef.current.focus()
  }, [])
  const alertType = 'alert-danger'

  // Form controls
  const [formData, setFormData] = useState({
    homeVal: '',
    downPayment: '',
    interestRate: '',
    loanDuration: '',
  })
  const [monthlyPay, setMonthlyPay] = useState('')
  const [loanAmt, setLoanAmt] = useState('')

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
        />

        {/* Calculate Alert  */}
        {monthlyPay && (
          <h4
            className={`${alertType}`}
            style={{
              width: 'auto',
              margin: '16px 0',
            }}
          >
            Your monthly mortgage will be KES {monthlyPay}
          </h4>
        )}
      </form>
    </div>
  )
}

export default MortgageCalcApp
