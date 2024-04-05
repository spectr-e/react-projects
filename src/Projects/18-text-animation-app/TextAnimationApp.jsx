import { useEffect, useRef, useState } from 'react'
import { Button, Form, Title } from '../../components'
import AnimatedText from 'react-animated-text-content'

const TextAnimationApp = () => {
  const [inputValue, setInputValue] = useState('')
  const [animText, setAnimText] = useState('')
  const inputRef = useRef(null)

  const handleInputChange = (e) => setInputValue(e.target.value)

  const handleClear = () => {
    setAnimText(inputValue)
    setInputValue('')
  }

  useEffect(() => {
    inputRef.current.focus()
  }, [inputValue])

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
          refer={inputRef}
        />
        <Button
          text='Clear'
          classes={'btn-large btn-danger'}
          handleClick={handleClear}
        />
      </form>
      {animText && (
        <AnimatedText
          type='char'
          interval={0.04}
          duration={1.2}
          className='subtitle'
          animation={{
            x: '-80px',
            y: '-240px',
            ease: 'linear',
          }}
        >
          {animText}
        </AnimatedText>
      )}
    </div>
  )
}

export default TextAnimationApp
