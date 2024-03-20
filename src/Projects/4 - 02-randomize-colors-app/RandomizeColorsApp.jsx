import { Title } from '../../components'

const RandomizeColorsApp = () => {
  const handleClick = (e) => {
    let body = document.querySelector('body')
    body.style.background = getRandomColor()
    e.target.style.backgroundColor = getRandomColor()
  }

  const getRandomColor = () => {
    let letters = '123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }
  return (
    <div className='container m-auto text-center'>
      <Title title={'Randomize Color App'} classes={'mb-4'} />
      <button className='btn btn-danger' onClick={handleClick}>
        Click Me
      </button>
      <button className='btn btn-success' onClick={handleClick}>
        Click Me
      </button>
      <button className='btn btn-primary' onClick={handleClick}>
        Click Me
      </button>
      <button className='btn btn-warning' onClick={handleClick}>
        Click Me
      </button>
    </div>
  )
}

export default RandomizeColorsApp
