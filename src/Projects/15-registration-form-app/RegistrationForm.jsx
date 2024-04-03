import { useEffect, useRef, useState } from 'react'
import { Alert, Button, Title } from '../../components'

const RegistrationForm = () => {
  const inputName = useRef(null)
  const inputEmail = useRef(null)
  const inputPassword = useRef(null)

  const [valid, setValid] = useState(false)
  const [submit, setSubmit] = useState(false)
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
  })

  useEffect(() => {
    inputName.current.focus()
  }, [])

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'fullname':
        setValues({ ...values, name: e.target.value })
        break
      case 'email':
        setValues({ ...values, email: e.target.value })
        break
      case 'password':
        setValues({ ...values, password: e.target.value })
        break
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!values.name) {
      inputName.current.focus()
    } else if (!values.email) {
      inputEmail.current.focus()
    } else if (!values.password) {
      inputPassword.current.focus()
    } else {
      setValid(true)
    }
    setSubmit(true)
  }

  return (
    <div className='m-auto'>
      {submit && valid ? (
        <div className='d-flex mt-2 flex-column'>
          {/* Alert & Welcome */}
          <Alert
            type={'success'}
            message={'Registration complete!'}
            delay={true}
            delayTime={5000}
          />
          <Title title={`Welcome!`} classes={'title-main'} />
          <Title title={values.name} classes={'subtitle'} />
        </div>
      ) : (
        <>
          {/* Form Design */}
          <div className='container bg-light text-dark mt-4 p-2 shadow-sm border-5 w-50'>
            <Title title={'Register'} />
            <form action='' className='' onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Enter your name'
                  name='fullname'
                  ref={inputName}
                  value={values.name}
                  onChange={handleChange}
                />
                {submit && !values.name ? (
                  <label htmlFor='fullname' className='text-danger font-sm'>
                    Please enter your name
                  </label>
                ) : null}
              </div>

              {/* Email Field */}
              <div className='form-group'>
                <input
                  type='email'
                  placeholder='Enter your email'
                  name='email'
                  ref={inputEmail}
                  value={values.email}
                  onChange={handleChange}
                />
                {submit && !values.email ? (
                  <label htmlFor='email' className='text-danger font-sm'>
                    Please enter your email
                  </label>
                ) : null}
              </div>

              {/* Password Field */}
              <div className='form-group'>
                <input
                  type='password'
                  placeholder='Enter your password'
                  name='password'
                  ref={inputPassword}
                  value={values.password}
                  onChange={handleChange}
                />
                {submit && !values.password ? (
                  <label htmlFor='password' className='text-danger font-sm'>
                    Please enter your password
                  </label>
                ) : null}
              </div>

              {/* Submit Button */}
              <Button
                classes={'btn-primary btn-lg btn-block'}
                text='Register'
              />
            </form>
          </div>
        </>
      )}
    </div>
  )
}

export default RegistrationForm
