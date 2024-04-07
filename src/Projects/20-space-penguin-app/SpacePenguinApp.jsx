import './Ship.css'
import { Button, Moon, Planet, SpaceShip, Title } from '../../components'

const SpacePenguinApp = () => {
  return (
    <div className='space'>
      <Button text='Launch' classes={'btn-danger'} />
      <section className='env'>
        <SpaceShip />
        <Moon />
        <Planet />
      </section>
      <Button text='Land' classes={'btn-primary'} />
    </div>
  )
}

export default SpacePenguinApp
