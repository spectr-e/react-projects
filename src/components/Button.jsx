const Button = ({ text = 'click', classes, icon, handleClick, btnType }) => {
  return (
    <button onClick={handleClick} className={`btn ${classes}`} type={btnType}>
      {icon} {text}
    </button>
  )
}

export default Button
