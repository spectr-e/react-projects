import { Shield, Swords } from '../assets'

const Card = ({ player, defenseVal, attackVal }) => {
  const iconStyle = {
    marginRight: 10,
    width: 20,
    background: 'transparent',
  }

  return (
    <div
      className={`card text-center m-1 shadow-md ${
        player === 'player_1' ? 'card-info' : 'card-danger'
      }`}
      style={{ maxWidth: 180 }}
    >
      <section
        className='card-header d-flex'
        style={{ justifyContent: 'space-between' }}
      >
        <div className='defense'>
          <img src={Shield} alt='defense' style={iconStyle} />
          <span>{!defenseVal ? '00' : defenseVal}</span>
        </div>
        <div className='attack'>
          <img src={Swords} alt='attack' style={iconStyle} />
          <span>{!attackVal ? '00' : attackVal}</span>
        </div>
      </section>
    </div>
  )
}

export default Card
