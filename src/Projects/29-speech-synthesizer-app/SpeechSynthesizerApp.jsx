import { Title } from '../../components'
import SpeechNarrator from './components/SpeechNarrator'

const SpeechSynthesizerApp = () => {
  return (
    <div className='container'>
      <Title title={'Speech Synthesizer'} classes={'title text-center'} />
      <SpeechNarrator />
    </div>
  )
}

export default SpeechSynthesizerApp
