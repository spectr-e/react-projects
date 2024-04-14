const Button = ({
  text = 'click',
  classes,
  icon,
  handleClick,
  handleSubmit,
}) => {
  return (
    <button
      onClick={handleClick}
      className={`btn ${classes}`}
      onSubmit={handleSubmit}
    >
      {icon} {text}
    </button>
  )
}

export default Button
