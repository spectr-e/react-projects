const Button = ({ text = 'click', classes, icon, handleClick }) => {
  return (
    <button onClick={handleClick} className={`btn ${classes}`}>
      {icon} {text}
    </button>
  )
}

export default Button
