import { useState } from 'react'
import { Button, Form, Title } from '../../components'

const TextAnimationApp = () => {
  const [value, setValue] = useState('')
  const handleChange = (e) => setValue(e.target.value)

  return (
    <div className='container text-center'>
      <Title title={'Text Animation App'} />
      <form
        className='container d-flex mt-2'
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <Form
          placeholderText={'Type in your text to be animated'}
          values={value}
          onChange={handleChange}
        />
        <Button text='Clear' classes={'btn-large btn-danger'} />
      </form>
    </div>
  )
}

export default TextAnimationApp
