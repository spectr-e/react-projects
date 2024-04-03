import { useEffect, useRef } from 'react'
import { Button, Title } from '../../components'

const RegistrationForm = () => {
  const inputName = useRef(null)
  const inputEmail = useRef(null)
  const inputPassword = useRef(null)

  useEffect(() => {
    inputName.current.focus()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='m-auto'>
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
            />
            <label htmlFor='fullname' className='text-danger font-sm'>
              Please enter your name
            </label>
          </div>

          {/* Email Field */}
          <div className='form-group'>
            <input
              type='email'
              placeholder='Enter your email'
              name='email'
              ref={inputEmail}
            />
            <label htmlFor='email' className='text-danger font-sm'>
              Please enter your email
            </label>
          </div>

          {/* Password Field */}
          <div className='form-group'>
            <input
              type='password'
              placeholder='Enter your password'
              name='password'
              ref={inputPassword}
            />
            <label htmlFor='password' className='text-danger font-sm'>
              Please enter your password
            </label>
          </div>

          {/* Submit Button */}
          <Button classes={'btn-primary btn-lg btn-block'} text='Register' />
        </form>
      </div>
    </div>
  )
}

export default RegistrationForm
