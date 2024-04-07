import { Ship } from '../assets'

const SpaceShip = ({ scale, start }) => {
  const animation = start
  return (
    <>
      <img
        src={Ship}
        alt='space ship'
        style={{ position: 'absolute', bottom: 50, zIndex: 1, width: scale }}
        className={animation}
      />
    </>
  )
}

export default SpaceShip
