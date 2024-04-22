import { AiFillRobot, AiOutlineRobot } from 'react-icons/ai'
import { Form } from '../../../components'
import { useState } from 'react'

const SpeechNarrator = ({ text }) => {
  const splitText = (text, from, to) => [
    text.slice(0, from),
    text.slice(from, to),
    text.slice(to),
  ]

  const [highlightSection, setHighlightSection] = useState({
    from: 0,
    to: 0,
  })

  const [rateValue, setRateValue] = useState('')
  const handleChange = (e) => {
    setRateValue(e.target.value)
  }

  const robotStyle = {
    fontSize: 100,
    padding: 0,
    cursor: 'pointer',
  }

  // speech synthesizer browser API - represents a speech request containing content to be read and how it should be read
  const synth = window.speechSynthesis
  let utterance = new SpeechSynthesisUtterance(text)
  utterance.addEventListener('boundary', ({ charIndex, charLength }) =>
    setHighlightSection({ from: charIndex, to: charIndex + charLength })
  )

  const HighlightedText = ({ text, from, to }) => {
    const [start, highlight, finish] = splitText(text, from, to)
    return (
      <div className='card' style={{ maxWidth: 480 }}>
        {start} <span className='bg-warning'>{highlight}</span>
        {finish}
      </div>
    )
  }

  return (
    <div className='d-flex flex-column my-3 container' style={{ gap: 30 }}>
      {/* robots */}
      <AiFillRobot style={robotStyle} className='text-primary' />
      <AiOutlineRobot style={robotStyle} />

      {/* TODO: Highlighted Text Component Here */}
      <HighlightedText text={text} {...highlightSection} />

      {/* rate */}
      <Form
        labelText={`Rate: ${rateValue}`}
        inputType='range'
        step={0.1}
        max={2}
        min={0.5}
        values={rateValue}
        onChange={handleChange}
      />
    </div>
  )
}

export default SpeechNarrator
