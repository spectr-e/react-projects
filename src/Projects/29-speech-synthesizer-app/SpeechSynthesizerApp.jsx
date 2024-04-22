import { useState } from 'react'
import { Title } from '../../components'
import SpeechNarrator from './components/SpeechNarrator'

const SpeechSynthesizerApp = () => {
  // textarea controls
  const [text, setText] = useState('')
  // textarea handlers
  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div className='container'>
      <Title title={'Speech Synthesizer'} classes={'title text-center'} />
      <SpeechNarrator />
      <textarea
        value={text}
        onChange={handleChange}
        id=''
        cols='30'
        rows='10'
      ></textarea>
    </div>
  )
}

export default SpeechSynthesizerApp
