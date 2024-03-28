import { useState } from 'react'
import { Slider, Title } from '../../components'

const SliderApp = () => {
  const [radius, setRadius] = useState(0)
  const handleInput = (e) => {
    setRadius(e.target.value)
  }

  let bgColor
  let textColor

  if (radius < 25) {
    bgColor = 'red'
    textColor = 'red'
  }
  if (radius < 25 && radius <= 50) {
    bgColor = 'blue'
  }
  if (radius > 51 && radius <= 75) {
    bgColor = 'green'
    textColor = 'white'
  }
  if (radius > 75) {
    bgColor = 'orange'
    textColor = 'white'
  }
  if (radius == 100) {
    bgColor = 'red'
  }
  return (
    <div className='container text-center'>
      <Title title='Slider App' />
      <Slider
        handleInput={handleInput}
        radius={radius}
        bgColor={bgColor}
        textColor={textColor}
      />
    </div>
  )
}

export default SliderApp
