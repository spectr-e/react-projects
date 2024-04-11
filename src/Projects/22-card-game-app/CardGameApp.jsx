import { useState } from 'react'
import { Button, Title } from '../../components'
import './CardGame.css'

const CardGameApp = () => {
  const [start, setStart] = useState(false)

  const startGame = () => {
    setStart(true)
  }

  document.body.style.background = '#170536'
  document.body.style.color = '#bab6bf'

  return (
    <div className='container text-center'>
      {!start ? (
        <section>
          <Title title={'Card Game'} />
          <Button
            text='Start'
            classes={'btn-success btn-lg'}
            handleClick={startGame}
          />
          <Title classes={'subtitle'} title={'Rules:'} />
          <ul className='font-md dsf flex-column'>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
              ipsam? Alias ducimus delectus consequuntur iste tempora
              consectetur reiciendis cumque. Veniam.
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
              ipsam? Alias ducimus delectus consequuntur iste tempora
              consectetur reiciendis cumque. Veniam.
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
              ipsam? Alias ducimus delectus consequuntur iste tempora
              consectetur reiciendis cumque. Veniam.
            </li>
          </ul>
        </section>
      ) : (
        <>
          <Title title={'0-1'} />
        </>
      )}
    </div>
  )
}

export default CardGameApp
