import './Ship.css'
import { Button, Moon, Planet, SpaceShip, Title } from '../../components'
import { Ship } from '../../assets'

const SpacePenguinApp = () => {
  return (
    <div className='space'>
      <Button text='Launch' classes={'btn-danger'} />
      <section className='env'>
        <SpaceShip ship={Ship} scale={200} />
        <Moon />
        <Planet />
      </section>
      <Button text='Land' classes={'btn-primary'} />
    </div>
  )
}

export default SpacePenguinApp
