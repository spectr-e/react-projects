import { Shield, Swords } from '../assets'

const Card = ({ player, defenseVal, attackVal, unitTypeName, unitTypeImg }) => {
  const iconStyle = {
    marginRight: 10,
    width: 20,
    background: 'transparent',
  }

  let mirror
  const mirrorImg = () => {
    player === 'player_2' ? (mirror = 'scaleX(-1)') : (mirror = 'scaleX(1)')
    return mirror
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
      <div className='card-body'>
        <h4 className='mb-1'>
          {unitTypeName ? unitTypeName : 'Unit type name'}
          <img
            src={unitTypeImg}
            alt='unit type'
            style={{
              background: '#fff',
              transform: `${mirror}`,
            }}
          />
        </h4>
      </div>
    </div>
  )
}

export default Card
