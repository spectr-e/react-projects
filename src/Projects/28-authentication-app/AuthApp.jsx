import { useState } from 'react'
import { Button, Form, Title } from '../../components'

const AuthApp = () => {
  const [ui, setUi] = useState({
    wrapper: true,
    title: 'Authenticate',
  })

  // form controls
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  // event handlers
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'username':
        setFormData({ ...formData, username: e.target.value })
        break
      case 'password':
        setFormData({ ...formData, password: e.target.value })
        break
      default:
        break
    }
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
            values={formData.username}
            onChange={handleChange}
          />
          <Form
            labelText={'Password'}
            inputName={'password'}
            inputType='password'
            placeholderText={'Enter your password'}
            values={formData.password}
            onChange={handleChange}
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
