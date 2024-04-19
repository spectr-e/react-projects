import React from 'react'
import { Button, Form, Title } from '../../components'

const MortgageCalcApp = () => {
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
            inputType='number'
            labelText={'Home Value'}
            placeholderText={'Enter the value of the home'}
          />
          <Form
            inputType='number'
            labelText={'Down Payment'}
            placeholderText={'Enter your deposit amount'}
          />
          <Form
            inputType='number'
            labelText={'Loan Amount'}
            placeholderText={'Enter the loan amount'}
          />
          <Form
            inputType='number'
            labelText={'Interest Rate (%)'}
            placeholderText={'Enter the interest rate'}
          />
          <Form
            inputType='number'
            labelText={'Loan Duration (Yrs)'}
            placeholderText={'Enter the loan duration'}
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
