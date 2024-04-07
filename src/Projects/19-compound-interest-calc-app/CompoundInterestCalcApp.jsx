import { Form, Title } from '../../components'

const CompoundInterestCalcApp = () => {
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
            labelText={'Principal Amount (KES)'}
            inputType='number'
            values=''
            classes={'mb-1'}
          />
          <Form
            labelText={'Monthly Contribution (KES)'}
            inputType='number'
            values=''
            classes={'mb-1'}
          />
          <Form
            labelText={'Interest Rate (%)'}
            inputType='number'
            values=''
            classes={'mb-1'}
          />
          <Form
            labelText={'Period (yrs)'}
            inputType='number'
            values=''
            classes={'mb-1'}
          />
        </div>

        <div className='card-footer text-right font-lg'>KES 0.00</div>
      </div>
    </div>
  )
}

export default CompoundInterestCalcApp
