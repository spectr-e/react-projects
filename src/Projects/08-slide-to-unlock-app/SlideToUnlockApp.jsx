import { useEffect, useState } from 'react'
import { LockSlider } from '../../Projects'
import { AiFillUnlock } from 'react-icons/ai'
import { LockImg } from '../../assets'

const SlideToUnlockApp = () => {
  const [lockSliderVal, setLockSliderVal] = useState(0)
  useEffect(() => {
    document.body.style.background = '#999'
    if (lockSliderVal === '100') {
      setSetshowLockSlider(false)
      setUiProps({
        uiText: 'Lock Screen',
        uiColor: '#eee',
        uiBg: `url(${LockImg}) center/cover no-repeat`,
      })
    }
  }, [lockSliderVal])

  const [setshowLockSlider, setSetshowLockSlider] = useState(false)
  const [uiProps, setUiProps] = useState({
    uiText: 'Unlock Screen',
    uiColor: '#eee',
    uiBg: `url(${LockImg}) center/cover no-repeat`,
  })

  const handleLockSliderInp = (e) => {
    setLockSliderVal(e.target.value)
    console.log(e.target.value)
  }

  const lockScreen = () => {
    setSetshowLockSlider(true)
    setLockSliderVal(0)
    setUiProps({
      uiText: 'Unlock Screen',
      uiColor: '#eee',
      uiBg: `url(${LockImg}) center/cover no-repeat`,
    })
  }
  return (
    <div
      style={{
        height: '70vh',
        margin: '15vh',
        width: 340,
        border: '4px solid #000',
        background: uiProps.uiBg,
      }}
      className='shadow-sm container text-center border-20 d-flex flex-column'
    >
      <h1 className='title' style={{ color: uiProps.uiColor }}>
        {uiProps.uiText}
      </h1>
      {setshowLockSlider ? (
        <LockSlider
          width={'240px'}
          handleInput={handleLockSliderInp}
          sliderVal={lockSliderVal}
        />
      ) : (
        <AiFillUnlock className='unlockIcon' onClick={lockScreen} />
      )}
    </div>
  )
}

export default SlideToUnlockApp
