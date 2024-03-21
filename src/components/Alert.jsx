import { useEffect, useState } from 'react'
import { Button } from '../components'

const Alert = ({ type, message, delay = false, delayTime = 3000 }) => {
  useEffect(() => {
    delay &&
      setTimeout(() => {
        setShowAlert(false)
      }, delayTime)
  }, [])

  const [showAlert, setShowAlert] = useState(true)

  const handleClose = (e) => {
    e.target.parentElement.parentElement.classList.add('fadeAlert')

    setTimeout(() => {
      setShowAlert(false)
    }, 400)
  }

  return (
    showAlert && (
      <div className={`alert alert-${type}`}>
        <div className='alert-close'>
          <span className='mr-1'>{message}</span>
          <Button classes={'btn-close'} text='X' handleClick={handleClose} />
        </div>
      </div>
    )
  )
}

export default Alert
