import './Ship.css'
import { Button, Moon, Planet, SpaceShip, Title } from '../../components'
import { Earth, Ship, TheMoon } from '../../assets'

const SpacePenguinApp = () => {
  return (
    <div className='space'>
      <Button text='Launch' classes={'btn-danger'} />
      <section className='env'>
        <SpaceShip ship={Ship} scale={200} />
        <Moon moon={TheMoon} />
        <Planet planet={Earth} />
      </section>
      <Button text='Land' classes={'btn-primary'} />
    </div>
  )
}

export default SpacePenguinApp
