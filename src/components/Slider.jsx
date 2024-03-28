import { useState } from 'react'

const Slider = ({ handleInput, bgColor, textColor, radius }) => {
  const sliderStyle = {
    appearance: 'none',
    width: '100%',
    height: 25,
    background: 'lightgray',
    cursor: 'pointer',
    opacity: 0.7,
  }

  return (
    <div
      className='container d-flex flex-column'
      style={{
        gap: 100,
      }}
    >
      <input
        type='range'
        min={0}
        max={100}
        value={radius}
        onInput={handleInput}
        style={sliderStyle}
      />
      <div
        className='font-semibold d-flex border-50'
        style={{
          color: !textColor ? 'black' : textColor,
          background: !bgColor ? 'lightgray' : bgColor,
          height: `${radius * 2}px`,
          width: `${radius * 2}px`,
        }}
      >
        <span>{radius}</span>
      </div>
    </div>
  )
}

export default Slider
