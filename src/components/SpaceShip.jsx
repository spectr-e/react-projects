import { Ship } from '../assets'

const SpaceShip = () => {
  return (
    <>
      <img
        src={Ship}
        alt='space ship'
        style={{ position: 'absolute', bottom: 50, zIndex: 1 }}
      />
    </>
  )
}

export default SpaceShip
