import { useState, useRef, useEffect } from 'react'
import { Button, Form, Title } from '../../components'
import { Wrapper } from './styles/Wrapper'
import Auth from './components/Auth'
import { AuthContext } from './context/AuthContext'

const AuthApp = () => {
  // login (context provider)
  const [authStatus, setAuthStatus] = useState(null)
  const login = () => {
    if (formData.username === 'josiah' && formData.password === '1234') {
      setAuthStatus(true)
      clearInputs()
      authenticate()
    } else {
      setAuthStatus(false)
      setAnimateDeny(true)
      setTimeout(() => {
        setAnimateDeny(false)
      }, 300)
    }
  }

  // authenticate - login component
  const authenticate = () => {
    setUi({
      wrapper: false,
      title: `Welcome ${formData.username}`,
    })
  }

  // login (context provider)
  const logout = () => {
    window.location.reload(true)
  }

  // clear form input fields
  const clearInputs = () => {
    setFormData({
      username: '',
      password: '',
    })
  }

  // ui controls
  const [ui, setUi] = useState({
    wrapper: true,
    title: 'Authenticate',
  })
  const [animateDeny, setAnimateDeny] = useState(false)

  // focus on initialization
  const inputUser = useRef(null)
  useEffect(() => {
    inputUser.current.focus()
  }, [])

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
      {/* context comes here */}
      <AuthContext.Provider value={{ status: authStatus, login, logout }}>
        {/* Form */}
        {ui.wrapper && (
          <Wrapper className={animateDeny && 'active'}>
            <Form
              labelText={'Username'}
              inputName={'username'}
              placeholderText={'Enter your username'}
              values={formData.username}
              onChange={handleChange}
              refer={inputUser}
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
      </AuthContext.Provider>
    </div>
  )
}

export default AuthApp
