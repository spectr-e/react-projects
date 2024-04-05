import { useState } from 'react'
import { Button, Form, Title } from '../../components'
import AnimatedText from 'react-animated-text-content'

const TextAnimationApp = () => {
  const [inputValue, setInputValue] = useState('')
  const [animText, setAnimText] = useState('')
  const handleInputChange = (e) => setInputValue(e.target.value)
  const handleClear = () => {
    setAnimText(inputValue)
    setInputValue('')
  }
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
        <Button
          text='Clear'
          classes={'btn-large btn-danger'}
          handleClick={handleClear}
        />
      </form>
      {animText && <AnimatedText className='subtitle'>{animText}</AnimatedText>}
    </div>
  )
}

export default TextAnimationApp
