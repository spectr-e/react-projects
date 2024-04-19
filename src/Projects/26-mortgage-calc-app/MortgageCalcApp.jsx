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
    loanAmt: '',
    interestRate: '',
    loanDuration: '',
  })

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
      case 'loanAmount':
        setFormData({ ...formData, loanAmount: e.target.value })
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
          />
          <Form
            inputName={'downPayment'}
            inputType='number'
            labelText={'Down Payment'}
            placeholderText={'Enter your deposit amount'}
            values={formData.downPayment}
            onChange={handleChange}
          />
          <Form
            inputName={'loanAmt'}
            inputType='number'
            labelText={'Loan Amount'}
            placeholderText={'Enter the loan amount'}
            values={formData.loanAmt}
            onChange={handleChange}
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
        </div>
        <Button
          btnType={'submit'}
          text='Calculate'
          classes={'btn-primary btn-block'}
        />

        {/* TODO: Calculate Alert  */}
      </form>
    </div>
  )
}

export default MortgageCalcApp
