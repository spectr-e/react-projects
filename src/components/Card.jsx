import { Horn, Shield, Swords } from '../assets'

const Card = ({
  player,
  defenseVal,
  attackVal,
  unitTypeName,
  unitTypeImg,
  moraleVal,
  unitVal,
}) => {
  const iconStyle = {
    marginRight: 10,
    width: 20,
    background: 'transparent',
  }

  let mirror
  const mirrorImg = (player) => {
    player === 'player_2' ? (mirror = 'scaleX(-1)') : (mirror = 'scaleX(1)')
    return mirror
  }
  mirrorImg(player)
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
      <section className='card-body'>
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
      </section>
      <section
        className='card-footer d-flex'
        style={{ justifyContent: 'space-between' }}
      >
        <div className='defense'>
          <img src={Horn} alt='defense' style={iconStyle} />
          <span>{!moraleVal ? '00' : moraleVal}</span>
        </div>
        <div className='attack'>
          <img src={unitTypeImg} alt='attack' style={iconStyle} />
          <span>{!unitVal ? '00' : attackVal}</span>
        </div>
      </section>
    </div>
  )
}

export default Card
