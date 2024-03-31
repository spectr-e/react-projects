import { useEffect, useState } from 'react'
import { Button, Popup, Title } from '../../components'

const MagicPopupApp = () => {
  const [trigger, setTrigger] = useState(false)
  const [timeTrigger, setTimeTrigger] = useState(false)
  const triggerPopup = () => {
    setTrigger(true)
  }

  useEffect(() => {
    setTimeout(() => {
      setTimeTrigger(true)
    }, 2000)
  }, [])

  return (
    <div className='text-center'>
      <Title title={'Magic Popup App'} />
      <Title
        title={'Click for popup, or wait for 3 sec'}
        classes={'subtitle'}
      />
      <Button classes={'btn-primary'} handleClick={triggerPopup} />
      <Popup
        type={'alert-info'}
        title={'Triggered Popup'}
        text={'This popup was triggered by a button'}
        handleClose={setTrigger}
        trigger={trigger}
      />
      <Popup
        type={'alert-danger'}
        title={'Time Triggered Popup'}
        text={'This popup was triggered by a delay'}
        handleClose={setTimeTrigger}
        trigger={timeTrigger}
      />
    </div>
  )
}

export default MagicPopupApp
