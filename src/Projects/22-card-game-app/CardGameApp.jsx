import { useState } from 'react'
import { Button, Title } from '../../components'

const CardGameApp = () => {
  const [start, setStart] = useState(false)
  document.body.style.background = '#170536'
  document.body.style.color = '#bab6bf'

  return (
    <div className='container'>
      {/* {!start ? } */}
      <section className='text-center'>
        <Title title={'Card Game'} />
        <Button text='Start' classes={'btn-success btn-lg'} />
        <Title classes={'subtitle'} title={'Rules:'} />
        <ul className='font-md dsf flex-column'>
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
            ipsam? Alias ducimus delectus consequuntur iste tempora consectetur
            reiciendis cumque. Veniam.
          </li>
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
            ipsam? Alias ducimus delectus consequuntur iste tempora consectetur
            reiciendis cumque. Veniam.
          </li>
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
            ipsam? Alias ducimus delectus consequuntur iste tempora consectetur
            reiciendis cumque. Veniam.
          </li>
        </ul>
      </section>
    </div>
  )
}

export default CardGameApp
