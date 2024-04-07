import './Ship.css'
import { Button, Moon, Planet, SpaceShip, Title } from '../../components'
import { Earth, Penguin, Ship, TheMoon } from '../../assets'
import { useEffect, useState } from 'react'

const SpacePenguinApp = () => {
  const [shipType, setShipType] = useState(Ship)
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

  useEffect(() => {
    if (shipProps.action === 'land') {
      setShipType(Penguin)
    }
    if (shipProps.action === 'fly') {
      setShipType(Ship)
    }
  }, [shipProps.action])

  return (
    <div className='space'>
      <Button text='Launch' classes={'btn-danger'} handleClick={startShip} />
      <section className='env'>
        <SpaceShip
          ship={shipType}
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
