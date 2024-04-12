import { useState } from 'react'
import { Button, Card, Title } from '../../components'
import './CardGame.css'
import { Spearman, Warhorse } from '../../assets'

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
          <main className='container m-auto game-board'>
            <section className='player_1'>
              <Card
                player={'player_1'}
                unitTypeImg={Warhorse}
                unitTypeName={'Sword Calvary'}
              />
              <Card
                player={'player_1'}
                unitTypeImg={Spearman}
                unitTypeName={'Spear Man'}
              />
            </section>
            <section className='fog-of-war'></section>
            <section className='player_2'>
              <Card
                player={'player_2'}
                unitTypeImg={Warhorse}
                unitTypeName={'Sword Calvary'}
              />
              <Card
                player={'player_1'}
                unitTypeImg={Spearman}
                unitTypeName={'Spear Man'}
              />
            </section>
          </main>
        </>
      )}
    </div>
  )
}

export default CardGameApp
