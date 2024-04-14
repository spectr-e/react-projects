import { useEffect, useRef, useState } from 'react'
import { Button, Form } from '../../components'
import { Container, Animation } from './AnimatedLoginForm.style'

const AnimatedLoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const emailInput = useRef(null)

  useEffect(() => {
    emailInput.current.focus()
  }, [])

  const formStyle = {
    width: 440,
    marginTop: '16vh',
  }

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'email':
        setFormData({ ...formData, email: e.target.value })
        break
      case 'password':
        setFormData({ ...formData, password: e.target.value })
      default:
        break
    }
  }

  return (
    <Container>
      <Animation></Animation>
      <form action='' style={formStyle} className='card m-1 m-auto'>
        <h2 className='subtitle my-2'>Login</h2>
        <Form
          labelText={'Email'}
          inputType='email'
          refer={emailInput}
          inputName={'email'}
          labelFor={'email'}
          values={formData.email}
          onChange={handleChange}
        />
        <Form
          labelText={'Password'}
          inputType='password'
          inputName={'password'}
          labelFor={'password'}
          values={formData.password}
          onChange={handleChange}
        />
        <div className='form-group'>
          <Button classes={'btn-block'} text='Submit' />
          <small className='text-accept'>Don't have an account?</small>
          <label
            htmlFor=''
            style={{
              textDecoration: 'underline',
              cursor: 'pointer',
              fontWeight: 400,
            }}
            className='mt-1 text-right'
          >
            Register
          </label>
        </div>
      </form>
    </Container>
  )
}

export default AnimatedLoginForm
