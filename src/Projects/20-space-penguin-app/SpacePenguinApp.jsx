import './Ship.css'
import { Button, Moon, Planet, SpaceShip, Title } from '../../components'
import { Earth, Ship, TheMoon } from '../../assets'
import { useState } from 'react'

const SpacePenguinApp = () => {
  const [shipAct, setShipAct] = useState()
  const [transformScale, setTransformScale] = useState(200)

  const startShip = () => {
    setShipAct('fly')
    setTransformScale(50)
  }
  const landShip = () => {
    setShipAct('land')
    setTransformScale(200)
  }
  return (
    <div className='space'>
      <Button text='Launch' classes={'btn-danger'} handleClick={startShip} />
      <section className='env'>
        <SpaceShip ship={Ship} scale={200} />
        <Moon moon={TheMoon} />
        <Planet planet={Earth} />
      </section>
      <Button text='Land' classes={'btn-primary'} handleClick={landShip} />
    </div>
  )
}

export default SpacePenguinApp
