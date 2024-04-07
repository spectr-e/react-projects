import './Ship.css'
import { Button, Moon, Planet, SpaceShip, Title } from '../../components'
import { Earth, Ship, TheMoon } from '../../assets'
import { useState } from 'react'

const SpacePenguinApp = () => {
  const [shipProps, setShipProps] = useState({
    action: '',
    scale: 200,
  })
  const startShip = () => {
    setShipProps({ action: 'fly', scale: 50 })
  }
  const landShip = () => {
    setShipProps({ action: 'land', scale: 200 })
  }
  return (
    <div className='space'>
      <Button text='Launch' classes={'btn-danger'} handleClick={startShip} />
      <section className='env'>
        <SpaceShip
          ship={Ship}
          scale={shipProps.scale}
          start={shipProps.action}
        />
        <Moon moon={TheMoon} />
        <Planet planet={Earth} />
      </section>
      <Button text='Land' classes={'btn-primary'} handleClick={landShip} />
    </div>
  )
}

export default SpacePenguinApp
