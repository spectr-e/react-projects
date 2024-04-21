import { useState } from 'react'
import { Button, Form, Title } from '../../components'
import { Wrapper } from './styles/Wrapper'
import Auth from './components/Auth'

const AuthApp = () => {
  const [ui, setUi] = useState({
    wrapper: true,
    title: 'Authenticate',
  })

  const [animateDeny, setAnimateDeny] = useState(false)

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
        <Wrapper className={animateDeny && 'active'}>
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
        </Wrapper>
      )}
      <Auth />
    </div>
  )
}

export default AuthApp
