const SpaceShip = ({ scale, start, ship }) => {
  const animation = start
  return (
    <>
      <img
        src={ship}
        alt='space ship'
        style={{ position: 'absolute', bottom: 50, zIndex: 1, width: scale }}
        className={animation}
      />
    </>
  )
}

export default SpaceShip
