import { useEffect, useState } from 'react'
import { Button } from '../../components'
import { BsEmojiSmileFill, BsEmojiFrownFill } from 'react-icons/bs'
import './Bounce.css'

const DialogBoxApp = ({ width = 360 }) => {
  const [icon, setIcon] = useState()
  const [bounce, setBounce] = useState('')
  const [subscription, setSubscription] = useState({
    title: 'Hello!',
    descr: 'Would you like to subscribe?',
    state: null,
    justifyContent: 'space-between',
  })

  const handleSubscribe = () => {
    setSubscription({
      title: 'Hooray!',
      descr: 'Thank you for subscribing',
      state: 'subscribed',
      justifyContent: 'flex-end',
    })
  }

  const handleUnsubscribe = () => {
    setSubscription({
      title: 'Sad...',
      descr: 'Sorry to see you go',
      state: null,
      justifyContent: 'space-between',
    })
  }

  const handleCancel = () => {
    setSubscription({
      title: 'Hello!',
      descr: 'Would you like to subscribe?',
      state: null,
      justifyContent: 'space-between',
    })
  }

  const iconStyle = {
    fontSize: 68,
    color: subscription.state
      ? 'rgba(59, 137, 90, 0.4)'
      : 'rgba(26, 118, 160, 0.4)',
    justifySelf: 'center',
  }
  useEffect(() => {
    if (subscription.state) {
      setIcon(<BsEmojiSmileFill style={iconStyle} />)
      document.body.style.background = 'rgba(59, 137, 90, 0.4)'
    } else {
      setIcon(<BsEmojiFrownFill style={iconStyle} />)
      document.body.style.background = 'rgba(26, 118, 160, 0.4)'
    }
  }, [subscription.state])

  useEffect(() => {
    setTimeout(() => {
      setBounce('')
    }, 500)
    return () => setBounce('bounce')
  }, [subscription.state])

  return (
    <div
      className={`card bg-light m-auto mt-4 ${bounce}`}
      style={{ width: width }}
    >
      <div className='card-body'>
        <div
          className='d-grid aic jcc'
          style={{ gridTemplateColumns: '2fr 1fr', alignSelf: 'center' }}
        >
          <section>
            <h2 className='card-title'>{subscription.title}</h2>
            <h3 className='card-text'>{subscription.descr}</h3>
          </section>
          <div>{icon}</div>
        </div>
      </div>

      <div
        className='d-flex mb-2 px-1 text-end'
        style={{ width: '100%', justifyContent: subscription.justifyContent }}
      >
        {!subscription.state && (
          <Button
            text='Cancel'
            classes={'btn-light'}
            handleClick={handleCancel}
          />
        )}
        {!subscription.state && (
          <Button
            text='Subscribe'
            classes={'btn-danger'}
            handleClick={handleSubscribe}
          />
        )}
        {subscription.state && (
          <Button
            text='Unsubscribe'
            classes={'btn-danger btn-block'}
            handleClick={handleUnsubscribe}
          />
        )}
      </div>
    </div>
  )
}

export default DialogBoxApp
