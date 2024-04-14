import { useEffect, useRef } from 'react'
import { Form } from '../../components'

const AnimatedLoginForm = () => {
  const emailInput = useRef(null)

  useEffect(() => {
    emailInput.current.focus()
  }, [])

  const formStyle = {
    width: 360,
    marginTop: '16vh',
  }

  return (
    <div className='container'>
      <form action='' style={formStyle} className='card m-1 m-auto'>
        <h2 className='subtitle my-2'>Login</h2>
        <Form
          labelText={'Email'}
          inputType='email'
          refer={emailInput}
          inputName={'email'}
          labelFor={'email'}
        />
        <Form
          labelText={'Password'}
          inputType='password'
          inputName={'password'}
          labelFor={'password'}
        />
      </form>
    </div>
  )
}

export default AnimatedLoginForm
