import { useEffect, useRef, useState } from 'react'
import { Form, Title } from '../../components'

const CompoundInterestCalcApp = () => {
  const [formData, setFormData] = useState({
    principal: '',
    monthly: '',
    interest: '',
    period: '',
  })
  const principalInputRef = useRef(null)
  useEffect(() => {
    principalInputRef.current.focus()
  }, [])
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
            classes={'mb-1'}
            refer={principalInputRef}
          />
          <Form
            inputName={'monthly'}
            labelFor={'monthly'}
            labelText={'Monthly Contribution (KES)'}
            inputType='number'
            values={formData.monthly}
            classes={'mb-1'}
          />
          <Form
            inputName={'interest'}
            labelFor={'interest'}
            labelText={'Interest Rate (%)'}
            inputType='number'
            values={formData.interest}
            classes={'mb-1'}
          />
          <Form
            inputName={'period'}
            labelFor={'period'}
            labelText={'Period (yrs)'}
            inputType='number'
            values={formData.period}
            classes={'mb-1'}
          />
        </div>

        <div className='card-footer text-right font-lg'>KES 0.00</div>
      </div>
    </div>
  )
}

export default CompoundInterestCalcApp
