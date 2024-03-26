import './LockSlider.css'

const LockSlider = ({ handleInput, sliderVal, width }) => {
  const sliderStyle = {
    appearance: 'none',
    width: !width ? '300px' : width,
    height: '50px',
    background: 'rgba(188, 190, 188, 0.5)',
    outline: 'none',
    borderRadius: '24px',
  }

  return (
    <input
      type='range'
      className='mb-2'
      style={sliderStyle}
      onInput={handleInput}
      value={sliderVal}
    />
  )
}

export default LockSlider
