import { useState } from 'react'
import { Button, Title } from '../../components'

const TemperatureControllerApp = () => {
  const [temp, setTemp] = useState(0)

  const handleAddClick = () => {
    setTemp(temp + 1)
  }

  const handleSubClick = () => {
    setTemp(temp - 1)
  }

  return (
    <div className='container'>
      <div className='text-center'>
        <Title title={'Temperature Controller App'} />
        <div className='card bg-light m-auto'>
          <h1
            className={`text-light card border-50 ${
              temp > 0 ? 'bg-danger' : 'bg-info'
            }`}
            style={{ height: 150, width: 150, border: '2px solid #666' }}
          >
            {temp}° C
          </h1>
          <div className='d-flex my-2'>
            <Button text='-' classes={'btn-lg'} handleClick={handleSubClick} />
            <Button text='+' handleClick={handleAddClick} classes={'btn-lg'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TemperatureControllerApp
