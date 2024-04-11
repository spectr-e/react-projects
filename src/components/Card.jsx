const Card = ({ player }) => {
  return (
    <div
      className={`card text-center m-1 shadow-md ${
        player === 'player_1' ? 'card-info' : 'card-danger'
      }`}
      style={{ maxWidth: 180 }}
    >
      Card
    </div>
  )
}

export default Card
