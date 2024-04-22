import { AiFillRobot, AiOutlineRobot } from 'react-icons/ai'

const SpeechNarrator = ({ text }) => {
  const robotStyle = {
    fontSize: 100,
    padding: 0,
    cursor: 'pointer',
  }
  return (
    <div className='d-flex flex-column my-3 container' style={{ gap: 30 }}>
      <AiFillRobot style={robotStyle} className='text-primary' />
      <AiOutlineRobot style={robotStyle} />
    </div>
  )
}

export default SpeechNarrator
