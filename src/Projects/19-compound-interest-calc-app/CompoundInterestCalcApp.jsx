import { useEffect, useRef, useState } from 'react'
import { Form, InterestCalc, Title } from '../../components'

const CompoundInterestApp = () => {
  const principalInputRef = useRef(null)
  useEffect(() => {
    principalInputRef.current.focus()
  }, [])

  const [formData, setFormData] = useState({
    principal: '',
    monthly: '',
    interest: '',
    period: '',
  })

  const handleInputChange = (e) => {
    switch (e.target.name) {
      case 'principal':
        setFormData({ ...formData, principal: e.target.value })
        break
      case 'monthly':
        setFormData({ ...formData, monthly: e.target.value })
        break
      case 'interest':
        setFormData({ ...formData, interest: e.target.value })
        break
      case 'period':
        setFormData({ ...formData, period: e.target.value })
        break
      default:
        break
    }
  }
  return (
    <div className='container'>
      <Title
        title={'Compound Interest Calculator'}
        classes={'subtitle text-center'}
      />

      <div
        className='card card-primary bg-warning shadow-md text-dark m-auto mt-4'
        style={{ maxWidth: 400 }}
      >
        <div className='card-body'>
          <Form
            inputName={'principal'}
            labelText={'Principal Amount (KES)'}
            labelFor={'principal'}
            inputType='number'
            values={formData.principal}
            onChange={handleInputChange}
            classes={'mb-1'}
            refer={principalInputRef}
          />
          <Form
            inputName={'monthly'}
            labelFor={'monthly'}
            labelText={'Monthly Contribution (KES)'}
            inputType='number'
            values={formData.monthly}
            onChange={handleInputChange}
            classes={'mb-1'}
          />
          <Form
            inputName={'interest'}
            labelFor={'interest'}
            labelText={'Interest Rate (%)'}
            inputType='number'
            values={formData.interest}
            onChange={handleInputChange}
            classes={'mb-1'}
          />
          <Form
            inputName={'period'}
            labelFor={'period'}
            labelText={'Period (yrs)'}
            inputType='number'
            values={formData.period}
            onChange={handleInputChange}
            classes={'mb-1'}
          />
        </div>

        <div className='card-footer text-right font-lg'>
          <InterestCalc
            principalValue={formData.principal}
            monthly={formData.monthly}
            interestRate={formData.interest}
            period={formData.period}
          />
        </div>
      </div>
    </div>
  )
}

export default CompoundInterestApp
