import { useState } from 'react'
import { Button, Form, Title } from '../../components'

const TextAnimationApp = () => {
  const [inputValue, setInputValue] = useState('')
  const handleInputChange = (e) => setInputValue(e.target.value)

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
          values={inputValue}
          onChange={handleInputChange}
        />
        <Button text='Clear' classes={'btn-large btn-danger'} />
      </form>
    </div>
  )
}

export default TextAnimationApp
