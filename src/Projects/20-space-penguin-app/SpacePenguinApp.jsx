import './Ship.css'
import { Button, Title } from '../../components'

const SpacePenguinApp = () => {
  return (
    <div className='space'>
      <Button text='Launch' classes={'btn-danger'} />
      <section className='env'></section>
      <Button text='Land' classes={'btn-primary'} />
    </div>
  )
}

export default SpacePenguinApp
