import { AiFillRobot, AiOutlineRobot } from 'react-icons/ai'
import { Form } from '../../../components'
import { useState } from 'react'

const SpeechNarrator = ({ text }) => {
  const [highlightSection, setHighlightSection] = useState({
    from: '',
    to: '',
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

  return (
    <div className='d-flex flex-column my-3 container' style={{ gap: 30 }}>
      {/* robots */}
      <AiFillRobot style={robotStyle} className='text-primary' />
      <AiOutlineRobot style={robotStyle} />
      {/* TODO: Highlighted Text Component Here */}
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
