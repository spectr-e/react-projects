import { Form, Title } from '../components'

const Contacts = ({ page }) => {
  return (
    <>
      <Title title={page} classes={'title text-center text-primary'} />

      <form className='d-flex flex-column' style={{ gap: 16 }}>
        <div className='dsf flex-column' style={{ gap: 8 }}>
          <Form
            inputName={'firstName'}
            labelFor={'firstName'}
            labelText={'First Name'}
            placeholderText={'Enter your first name'}
          />
          <Form
            inputName={'lastName'}
            labelFor={'lastName'}
            labelText={'Last Name'}
            placeholderText={'Enter your last name'}
          />
          <Form
            inputName={'email'}
            labelFor={'email'}
            labelText={'Email'}
            inputType={'email'}
            placeholderText={'Enter your email'}
          />
        </div>
        <input type='submit' value={'Submit'} className='btn btn-primary' />
      </form>
    </>
  )
}

export default Contacts
