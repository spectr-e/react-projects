import { useState } from 'react'
import { Button, Form, Title } from '../../components'

const AuthApp = () => {
  const [ui, setUi] = useState({
    wrapper: true,
    title: 'Authenticate',
  })

  // event handlers
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='container' style={{ width: 240 }}>
      <Title title={ui.title} classes={'subtitle text-center'} />

      {/* Form */}
      {ui.wrapper && (
        <form
          onSubmit={handleSubmit}
          className='d-flex flex-column'
          style={{ width: '100%' }}
        >
          <Form
            labelText={'Username'}
            inputName={'username'}
            placeholderText={'Enter your username'}
          />
          <Form
            labelText={'Password'}
            inputName={'password'}
            placeholderText={'Enter your password'}
          />
          <Button
            classes={'btn-block btn-primary'}
            text='Login'
            btnType={'submit'}
          />
        </form>
      )}
    </div>
  )
}

export default AuthApp
